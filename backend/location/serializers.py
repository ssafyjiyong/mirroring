from rest_framework import serializers
from .models import location

        
class locationAllSerializer(serializers.ModelSerializer):
    class Meta:
        model=location
        fields="__all__"
        
class locationMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = location
        fields = ('id','name','lattitude','longitude')
        
class locationSchduleModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = location
        fields = ('id','name','address','lattitude','longitude')