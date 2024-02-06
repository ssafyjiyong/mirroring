from rest_framework import serializers
from .models import location

        
class locationAllSerializer(serializers.ModelSerializer):
    class Meta:
        model=location
        fields="__all__"
        
class locationMapSerializer(serializers.ModelSerializer):
    
    lat = serializers.CharField(source="lattitude")
    lng = serializers.CharField(source="longitude")
     
    class Meta:
        model = location
        fields = ('id','name','lat','lng')

        
class locationSchduleModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = location
        fields = ('id','name','address','lattitude','longitude')