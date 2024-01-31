from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from .serializers import FishSerializer, UserFishSerializer
from .models import fish

# Create your views here.
class FishView(APIView):
    @swagger_auto_schema(responses={"200": FishSerializer})
    def get(self, request):
        fishlist = fish.objects.all()
        serializer = FishSerializer(fishlist, many=True)
        return Response(serializer.data)