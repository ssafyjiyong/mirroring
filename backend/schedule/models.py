from django.db import models

from information.models import fishing_area,fising_method
from user.models import User

# Create your models here.
class schedule(models.Model):
    # user 생성시 사전설문 저장용으로 schedule이 생성됨(done = True)

    user= models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    method= models.ForeignKey(fising_method, on_delete=models.SET_NULL, null=True, blank=True) # 낚시 방법
    method_review = models.IntegerField(null=True) # 낚시방법 리뷰
    area= models.ForeignKey(fishing_area, on_delete=models.SET_NULL, null=True, blank=True ) # 낚시 구역 id
    date= models.DateTimeField() # 낚시 날짜 
    location= models.CharField(max_length=150) # 낚시 실제 장소
    location_review = models.IntegerField(null=True) # 낚시 실제 장소 리뷰
    done= models.BooleanField(default=False) #낚시 일정 완료 여부
