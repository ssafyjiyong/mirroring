from django.db import models
from user.models import User
from information.models import fishing_area, fishing_bait, fishing_equipment, fishing_method, release_fish, prohibit_fish

# Create your models here.
class fish(models.Model):
    name_kor = models.CharField(max_length=100)
    name_eng = models.CharField(max_length=100)
    release_standard = models.ForeignKey(release_fish, on_delete=models.SET_NULL, null=True, blank=True)
    prohibit = models.ForeignKey(prohibit_fish, on_delete=models.SET_NULL, null=True, blank=True)
    fish_difficulty = models.IntegerField()
    bait = models.ManyToManyField(fishing_bait)
    area = models.ManyToManyField(fishing_area)
    equipment = models.ManyToManyField(fishing_equipment)
    method = models.ManyToManyField(fishing_method)

class user_fish(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fish = models.ForeignKey(fish, on_delete=models.CASCADE)
    max_length = models.FloatField(null=True, blank=True)
    count = models.IntegerField(default=0)
    image = models.ImageField(null=True)
    preference = models.BooleanField(default=0)