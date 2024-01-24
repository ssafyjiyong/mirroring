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

# def signup(request):
#     serializer = UserSerializer(data=request.data)
#     if serializer.is_valid():
#         user = serializer.save()
#         return Response({'id': user.id, 'username': user.username, 'email': user.email}, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
        
# @api_view(['POST'])
# @permission_classes([AllowAny])
# def signin(request):
#     email = request.data.get('email')
#     password = request.data.get('password')

#     # Check if both email and password are provided
#     if not email or not password:
#         return Response({'detail': 'Both email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

#     # Authenticate user using email
#     user = authenticate(request, email=email, password=password)

#     # Check if authentication was successful
#     if user is not None:
#         auth_login(request, user)
#         serializer = UserSerializer(user)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     else:
#         return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# # 로그아웃
class UserSignOutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        logout(request)
        return Response({'detail': 'Successfully logged out'}, status=status.HTTP_200_OK)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def signout(request):
#     auth_logout(request)
#     return Response({'detail': 'Successfully logged out'}, status=status.HTTP_200_OK)

# # 회원 탈퇴
# @api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
# def deleteid(request):
#     user = request.user
#     user.delete()
#     return Response({'detail': 'Successfully deleted'}, status=status.HTTP_204_NO_CONTENT)

# # 회원정보 수정
# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def updateuser(request):
#     user = request.user
#     serializer = UserSerializer(user, data=request.data, partial=True)
#     if serializer.is_valid():
#         serializer.save()
#         return Response({'detail': 'Successfully updated'})
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
