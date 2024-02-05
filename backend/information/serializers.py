from .models import fishing_method, fishing_area, fishing_bait, fishing_equipment, release_fish, prohibit_fish
from rest_framework import serializers

class FishMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_method
        fields = "__all__"

class FishAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_area
        fields = "__all__"

class FishBaitSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_bait
        fields = "__all__"     

class FishEquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_equipment
        fields = "__all__"

class FishReleaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = release_fish
        fields = "__all__"

class FishProhibitSerializer(serializers.ModelSerializer):
    class Meta:
        model = prohibit_fish
        fields = "__all__"