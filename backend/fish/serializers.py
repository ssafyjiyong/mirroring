from rest_framework import serializers
from .models import fish, user_fish
from information.serializers import FishReleaseShortSerializer, FishProhibitShortSerializer

class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = fish
        fields = "__all__"

class FishDetailSerializer(serializers.ModelSerializer):
    prohibit = FishProhibitShortSerializer(read_only=True)
    release = FishReleaseShortSerializer(read_only=True)
    
    class Meta:
        model = fish
        fields = '__all__'

class UserFishDetailSerializer(serializers.ModelSerializer):
    fish = FishSerializer(read_only=True)

    class Meta:
        model = user_fish
        fields = '__all__'
        read_only_fields = ('fish', )

class UserFishSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_fish
        fields = '__all__'
        read_only_fields = ('fish', )
