from rest_framework import serializers
from .models import schedule
from location.serializers import locationSchduleModeSerializer
from information.serializers import FishAreaSerializer,FishMethodSerializer

class ScheduleAllSerializer(serializers.ModelSerializer):
    location=locationSchduleModeSerializer()
    area=FishAreaSerializer()
    method=FishMethodSerializer()
    class Meta:
        model = schedule
        fields = "__all__"

class ScheduleDoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = schedule
        fields = ('id', 'done')