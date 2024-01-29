from rest_framework import serializers
from .models import fish, user_fish

class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = fish
        fields = "__all__"

class UserFishSerializer(serializers.ModelSerializer):
    class Meta:
        model = user_fish
        fields = '__all__'
        read_only_fields = ('user', 'fish')