from rest_framework import serializers
from .models import schedule

class ScheduleAllSerializer(serializers.ModelSerializer):
    class Meta:
        model=schedule
        fields=('id','user','method','area','date','location','done')

