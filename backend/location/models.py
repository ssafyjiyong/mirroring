from django.db import models
from fish.models import fish

# Create your models here.

class location(models.Model):
    name=models.CharField (max_length=50)
    address=models.CharField(max_length=100)
    lattitude=models.CharField(max_length=30)
    longitude=models.CharField(max_length=30)
    join_fish_location=models.ManyToManyField(fish)
    
