from rest_framework import serializers
from .models import Schedule

class ScheduleAllSerializer(serializers.ModelSerializer):
    class Meta:
        model=Schedule
        fields=('id','schedule_date','schedule_location','schedule_fishing_method','schedule_fishing_Area','schedule_done')

