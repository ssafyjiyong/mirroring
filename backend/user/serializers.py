from rest_framework import serializers
from allauth.account import app_settings as allauth_settings
from allauth.utils import get_username_max_length
from allauth.account.adapter import get_adapter
from django.core.exceptions import ValidationError as DjangoValidationError
from .models import User
from dj_rest_auth.registration.serializers import RegisterSerializer

class CustomRegisterSerializer(RegisterSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'nickname', 'age', 'gender', 'profile_img']
        
    name = serializers.CharField(required=False, max_length=10)
    age = serializers.IntegerField(required=False, allow_null=True)
    gender = serializers.ChoiceField(choices=User.GENDER_CHOICES, default='선택하지 않음', required=False)
    date_of_birth = serializers.DateField(required=False, allow_null=True)
    nickname = serializers.CharField(required=True, max_length=8)
    profile_img = serializers.ImageField(required=False, allow_null=True)

    def get_cleaned_data(self):
        # data = super().get_cleaned_data()
        # data['name'] = self.validated_data.get('name', '')
        # data['nickname']: self.validated_data.get('nickname', '')
        # data['age']: self.validated_data.get('age', None)
        # data['gender']: self.validated_data.get('gender', '')
        # data['date_of_birth']: self.validated_data.get('date_of_birth', None)
        # data['profile_img']: self.validated_data.get('profile_img', None)
        
        # return data
        return {
            'email': self.validated_data.get('email', ''),
            'password1': self.validated_data.get('password1', ''),
            'name': self.validated_data.get('name', ''),
            'nickname': self.validated_data.get('nickname', ''),
            'age': self.validated_data.get('age', None),
            'gender': self.validated_data.get('gender', ''),
            'date_of_birth': self.validated_data.get('date_of_birth', None),
            'profile_img': self.validated_data.get('profile_img', None),
        }

    # def save(self, request):
    #     adapter = self.get_adapter()
    #     user = adapter.new_user(request)
    #     self.cleaned_data = self.get_cleaned_data()
    #     adapter.save_user(request, user, self)
    #     self.custom_signup(request, user)
    #     return user
    
    def save(self, request):
        adapter = get_adapter(request)
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        return user
