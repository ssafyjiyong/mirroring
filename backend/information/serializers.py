from .models import fishing_method,fishing_area
from rest_framework import serializers

class FishMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model=fishing_method
        fields="__all__"
        
class FishAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model=fishing_area
        fields=("id","title")
        
class FishMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model=fishing_method
        fields=("id","title")

        