from .models import fishing_method
from rest_framework import serializers

class FishMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model=fishing_method
        fields="__all__"
        