from rest_framework import serializers
from .models import schedule

class ScheduleAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = schedule
        fields = "__all__"

class ScheduleDoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = schedule
        fields = ('id', 'done')