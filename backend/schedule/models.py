from django.db import models

# Create your models here.
class Schedule(models.Model):
    schedule_date=models.DateTimeField() #낚시 날짜 
    schedule_location=models.CharField(max_length=200) #낚시 실제장소
    schedule_fishing_method=models.CharField(max_length=20) #낚시 방법
    schedule_fishing_Area=models.CharField(max_length=20) #낚시 구역
    schedule_done=models.BooleanField(default=False)


