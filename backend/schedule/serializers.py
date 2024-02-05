from rest_framework import serializers
from .models import schedule
from user.serializers import UserSerializer

class ScheduleAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = schedule
        fields = "__all__"

class ScheduleDoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = schedule
        fields = ('id', 'done')
        
class CreatePreSurveySerializer(serializers.ModelSerializer):
    class Meta:
        model=schedule
        fields=('id','method','method_review',)