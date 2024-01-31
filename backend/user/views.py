from django.shortcuts import render, get_object_or_404
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from rest_framework.generics import RetrieveUpdateAPIView
from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework import status
import json
from .models import User
from .serializers import CustomRegisterSerializer, UserSerializer

# Create your views here.
class CustomRegisterView(RegisterView):
    serializer_class = CustomRegisterSerializer

class UserProfileView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        user = self.get_object()
        user.delete()
        return Response({"detail": "User deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
    
class UserLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = {}
        req_body = json.loads(request.body)
        email = req_body.get('email')
        password = req_body.get('password')

        account = get_object_or_404(User, email=email)

        token, created = Token.objects.get_or_create(user=account)

        if not check_password(password, account.password):
            raise ValidationError({"message": "Incorrect Login credentials"})

        if account.is_active:
            login(request, account)
            data["message"] = "user logged in"
            data["email"] = account.email

            response_data = {"data": data, "token": token.key}

            return Response(response_data, status=status.HTTP_200_OK)

        else:
            raise ValidationError({"400": 'Account not active'})

class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        logout(request)

        return Response('User logged out successfully', status=status.HTTP_200_OK)