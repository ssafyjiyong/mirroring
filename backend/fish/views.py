from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from .serializers import FishSerializer, UserFishSerializer
from .models import fish, user_fish

# Create your views here.
class FishListView(APIView):
    @swagger_auto_schema(responses={"200": FishSerializer})
    def get(self, request):
        fishlist = fish.objects.all()
        serializer = FishSerializer(fishlist, many=True)
        return Response(serializer.data)

class FishView(APIView):
    @swagger_auto_schema(responses={"200": FishSerializer})
    def get(self, request, pk):
        fishpk = get_object_or_404(fish, pk=pk)
        serializer = FishSerializer(fishpk)
        return Response(serializer.data)

class MyFishListView(APIView):
    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def get(self, request):
        fishlist = user_fish.objects.all()
        seriarizer = UserFishSerializer(fishlist, many=True)
        return Response(seriarizer.data)
    
    @swagger_auto_schema(responses={"201": UserFishSerializer})
    def post(self, request):
        pass

class MyFishView(APIView):
    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def get(self, request, pk):
        myfish = get_object_or_404(user_fish, pk=pk)
        seriarizer = UserFishSerializer(myfish)
        return Response(seriarizer.data)
    
    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def put(self, request, pk):
        myfish = get_object_or_404(user_fish, pk=pk)
        serializer = UserFishSerializer(myfish, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def patch(self, request, pk):
        myfish = get_object_or_404(user_fish, pk=pk)
        serializer = UserFishSerializer(myfish, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)