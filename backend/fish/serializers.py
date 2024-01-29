from rest_framework import serializers
from .models import fish, user_fish

class FishSerializer(serializers.ModelSerializer):
    class Meta:
        model = fish
        fields = "__all__"

