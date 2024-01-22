from django.shortcuts import render

from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout
from django.contrib.auth.decorators import login_required

# rest framework
from rest_framework.authtoken.models import Token
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

# serializers
# from .serializers 

# Create your views here.    
# 회원 가입    
def signup(request):
    pass

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
