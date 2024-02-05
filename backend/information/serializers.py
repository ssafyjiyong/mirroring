from .models import fishing_method, fishing_area, fishing_bait, fishing_equipment, release_fish, prohibit_fish
from rest_framework import serializers

class MethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_method
        fields = "__all__"

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_area
        fields = "__all__"

class BaitSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_bait
        fields = "__all__"     

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = fishing_equipment
        fields = "__all__"

class ReleaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = release_fish
        fields = "__all__"

class ProhibitSerializer(serializers.ModelSerializer):
    class Meta:
        model = prohibit_fish
        fields = "__all__"

class ReleaseShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = release_fish
        fields = ('standard')

class ProhibitShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = prohibit_fish
        fields = ('standard_start', 'standard_end')
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

        
