from django.db import models

from information.models import fishing_area,fising_method
from user.models import User

# Create your models here.
class schedule(models.Model):
    #id=models.IntegerField(primary_key=True) #낚시 일정 id
    user= models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    method= models.ForeignKey(fising_method, on_delete=models.SET_NULL,null=True, blank=True) #낚시 방법 id
    area= models.ForeignKey(fishing_area,on_delete=models.SET_NULL,null=True, blank=True ) #낚시 구역 id
    date= models.DateTimeField() #낚시 날짜 
    location= models.CharField(max_length=150) #낚시 실제장소
    done= models.BooleanField(default=False) #낚시 일정 완료 여부
     


