from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    nickname = models.CharField(max_length=50, blank=True, null=True)
    sex = models.BooleanField()
    date_of_birth = models.DateField(blank=True, null=True)
    
    email = models.EmailField(unique=True)

    profile_img = models.ImageField(upload_to='profile_images/', null=True, blank=True)