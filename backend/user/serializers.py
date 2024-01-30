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
        fields = ['email', 'password', 'name', 'nickname', 'age', 'gender', 'date_of_birth', 'profile_img']
        read_only_fields = ('token', )
        
    name = serializers.CharField(required=False, max_length=10)
    age = serializers.IntegerField(required=False, allow_null=True)
    gender = serializers.ChoiceField(choices=User.GENDER_CHOICES, default='선택하지 않음', required=False)
    date_of_birth = serializers.DateField(required=False, allow_null=True)
    nickname = serializers.CharField(required=True, max_length=8)
    profile_img = serializers.ImageField(required=False, allow_null=True)

    def get_cleaned_data(self):
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
        
    def save(self, request):
        adapter = get_adapter(request)
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        
        user.name = self.cleaned_data.get('name')
        user.nickname = self.cleaned_data.get('nickname')
        user.age = self.cleaned_data.get('age')
        user.gender = self.cleaned_data.get('gender')
        user.date_of_birth = self.cleaned_data.get('date_of_birth')
        user.profile_img = self.cleaned_data.get('profile_img')
        
        user.save()
        
        self.custom_signup(request, user)
        return user
    
    def validate_email(self, email):
        """
        이메일 중복 확인 로직 추가
        """
        try:
            User.objects.get(email=email)
            raise serializers.ValidationError("해당 이메일 주소는 이미 사용 중입니다.")
        except User.DoesNotExist:
            return email
        
    def validate_nickname(self, nickname):
        """
        닉네임 중복 확인 로직 추가
        """
        try:
            User.objects.get(nickname=nickname)
            raise serializers.ValidationError("해당 닉네임은 이미 사용 중입니다.")
        except User.DoesNotExist:
            return nickname

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'is_superuser', 'email', 'name', 'date_joined', 'nickname', 'age', 'date_of_birth', 'gender', 'profile_img']
        read_only_fields = ('email', 'is_staff', 'is_active', 'date_joined', 'is_superuser'),