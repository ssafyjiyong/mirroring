from django.shortcuts import render, get_object_or_404

from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required

# rest framework
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

# serializers
from .serializers import UserSerializer

# model
from .models import User

# Create your views here.    
# 회원 가입    
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({'id': user.id, 'email': user.email}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# 로그인
def signin(request):
    pass

# 로그아웃
def signout(request):
    pass

# 회원 탈퇴
def deleteid(request):
    pass

# 회원정보 수정
def updateuser(request):
    pass
