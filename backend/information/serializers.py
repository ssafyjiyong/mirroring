from rest_framework import serializers
from fish.models import fish

class recommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = fish
        fields = "__all__"