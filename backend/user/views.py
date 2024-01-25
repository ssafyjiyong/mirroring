from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse

from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.password_validation import validate_password  

from .models import User
from .serializers import UserSerializer

class UserSignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Validate password
        try:
            validate_password(request.data['password'])
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

# 로그인
class UserSignInView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'detail': 'Both email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# google login
class GoogleLoginView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # 사용자를 Google OAuth 로그인 페이지로 리다이렉트
        return HttpResponseRedirect(reverse('social:begin', args=['google-oauth2']))

class GoogleCallbackView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # Google에서 앱을 승인한 후 콜백 처리
        user = request.user
        if user.is_authenticated:
            # 사용자가 이미 인증되었으면 리다이렉트
            return HttpResponseRedirect(reverse('/'))

        # 사용자가 인증되지 않은 경우 인증 처리 수행
        return _handle_authentication(request)

def _handle_authentication(request):
    # 사용자가 앱을 승인한 후 인증 프로세스 완료
    user = request.user
    if user.is_authenticated:
        # 사용자가 인증되었으면 리다이렉트
        return HttpResponseRedirect(reverse('/'))

    # 인증에 실패한 경우 애플리케이션의 요구에 맞게 처리
    return render(request, 'authentication_failed.html')


# # 로그아웃
class UserSignOutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'detail': 'Successfully logged out'}, status=status.HTTP_200_OK)

# # 회원 탈퇴
class DeleteUserView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        user = request.user
        user.delete()
        return Response({'detail': 'Successfully deleted'}, status=status.HTTP_204_NO_CONTENT)

# # 회원정보 수정
# class UserUpdateView(APIView):
    # permission_classes = [IsAuthenticated]

    # def put(self, request, *args, **kwargs):
    #     user = request.user
    #     serializer = UserSerializer(user, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response({'detail': 'Successfully updated'})
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
