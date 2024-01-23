from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")

        user = User(email=email, **extra_fields)

        if password:
            user.set_password(password)
        else:
            user.set_unusable_password()

        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    GENDER_CHOICES = [
        ('선택하지 않음', '선택하지 않음'),
        ('남성', '남성'),
        ('여성', '여성'),
    ]

    username = None
    first_name = None
    last_name = None
    
    email = models.EmailField(unique=True)
    gender = models.CharField(
        max_length=10, 
        choices = GENDER_CHOICES, 
        default='선택하지 않음'
    )
    date_of_birth = models.DateField(blank=True, null=True)

    nickname = models.CharField(null=True, unique=True, max_length=8)

    profile_img = models.ImageField(upload_to='profile_images/', null=True, blank=True)

    objects = UserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []