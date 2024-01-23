from rest_framework import serializers
from .models import Schedule

class ScheduleAllSerializer(serializers.ModelSerializer):
    class Meta:
        model=Schedule
        fields=('id','method_id','area_id','date','location','done')

