import requests
from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.views import LogoutView
from rest_framework.generics import RetrieveUpdateAPIView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import RegisterView, SocialLoginView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token 
from rest_framework.views import APIView 
from rest_framework.authentication import TokenAuthentication 
from .serializers import CustomRegisterSerializer, UserSerializer, UserProfileSerializer
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.
class CustomRegisterView(RegisterView):
    serializer_class = CustomRegisterSerializer
    permission_classes = [AllowAny]

class LoginView(APIView):
    def post(self, request):
        user = authenticate(email=request.data['email'], password=request.data['password'])
        if user is not None:
            token = Token.objects.get(user=user)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=401)

class CustomLogoutView(APIView):
    def post(self, request, *args, **kwargs):
        # 기존의 로그아웃 뷰를 호출하여 로그아웃 수행
        response = LogoutView.as_view()(request, *args, **kwargs)
        # 리다이렉트가 아니라 JSON 응답을 반환
        return Response({"detail": "Successfully logged out."})

class UserProfileView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

    def get(self, request, *args, **kwargs):
        self.serializer_class = UserProfileSerializer
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        self.serializer_class = UserSerializer
        return self.partial_update(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        self.serializer_class = UserSerializer
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        user = self.get_object()
        user.delete()
        return Response({"detail": "User deleted successfully."}, status=status.HTTP_204_NO_CONTENT)


class GoogleOAuthCallbackView(APIView):
    def get(self, request):
        # code 값을 URL의 query string에서 추출
        if code := request.GET.get("code"):
            response = self.forward_code_to_google_login_view(code)
            if response.status_code == 200:
                return Response(response.json(), status=status.HTTP_200_OK)
            return Response(
                {"error": "Failed to process with GoogleLoginView"},
                status=response.status_code,
            )

        return Response(
            {"error": "Code not provided"}, status=status.HTTP_400_BAD_REQUEST
        )

    def forward_code_to_google_login_view(self, code: str):
        url = "http://localhost:8000/api/accounts/google/login/"
        payload = {"code": code}
        headers = {"Content-Type": "application/json"}
        response = requests.post(url, json=payload, headers=headers)
        return response


class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://localhost:8000/user/google/login/callback/"
    client_class = OAuth2Client

    @ensure_csrf_cookie
    def post(self, request, *args, **kwargs):
        # print(request.POST)
        # return super().post(request, *args, **kwargs)
        
        response = super().post(request, *args, **kwargs)

        # ID 토큰 얻기
        id_token = request.data.get("id_token")

        if not id_token:
            return Response({"error": "ID token not provided"}, status=status.HTTP_400_BAD_REQUEST)

        # ID 토큰을 검증하고, 필요한 정보를 추출할 수 있는 로직을 작성하세요.
        # (Google API 라이브러리나 다른 방법을 사용하여 ID 토큰을 검증할 수 있음)

        # Django Rest Framework 토큰 발급
        user = self.serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        return Response({"token": token.key})