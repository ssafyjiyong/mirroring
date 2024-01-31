from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateAPIView
from dj_rest_auth.registration.views import RegisterView
from rest_framework.permissions import IsAuthenticated
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