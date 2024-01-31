from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from django.contrib.auth.decorators import login_required
from drf_yasg.utils import swagger_auto_schema
from django.db import transaction
from django.utils.decorators import method_decorator
from rest_framework.permissions import IsAuthenticated

from .serializers import FishSerializer, UserFishSerializer
from .models import fish, user_fish

# Create your views here.
class FishListView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={"200": FishSerializer})
    def get(self, request):
        fishlist = fish.objects.all()
        serializer = FishSerializer(fishlist, many=True)
        return Response(serializer.data)

class FishView(APIView):
    permission_classes = [IsAuthenticated]
    
    @swagger_auto_schema(responses={"200": FishSerializer})
    def get(self, request, pk):
        fishpk = get_object_or_404(fish, pk=pk)
        serializer = FishSerializer(fishpk)
        return Response(serializer.data)

@method_decorator(login_required, name='dispatch')
class MyFishListView(APIView):
    permission_classes = [IsAuthenticated]
    
    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def get(self, request):
        fishlist = user_fish.objects.filter(user=request.user)
        seriarizer = UserFishSerializer(fishlist, many=True)
        return Response(seriarizer.data)
    
    @swagger_auto_schema(responses={"201": UserFishSerializer})
    @transaction.atomic
    def post(self, request):
        fish_ids = request.data.get('fish_ids', [])

        user = request.user
        user_fish_instances = []
        for fish_id in fish_ids:
            fish_instance = user_fish(user=user, fish_id=fish_id)
            user_fish_instances.append(fish_instance)

        user_fish.objects.bulk_create(user_fish_instances)

        serializer = UserFishSerializer(user_fish_instances, many=True)
        return Response(serializer.data)

@method_decorator(login_required, name='dispatch')
class MyFishView(APIView):
    permission_classes = [IsAuthenticated]
    
    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def get(self, request, pk):
        myfish = get_object_or_404(user_fish, pk=pk).filter(user=request.user)
        seriarizer = UserFishSerializer(myfish)
        return Response(seriarizer.data)
    
    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def put(self, request, pk):
        myfish = get_object_or_404(user_fish, pk=pk).filter(user=request.user)
        serializer = UserFishSerializer(myfish, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @swagger_auto_schema(responses={"200": UserFishSerializer})
    def patch(self, request, pk):
        myfish = get_object_or_404(user_fish, pk=pk).filter(user=request.user)
        serializer = UserFishSerializer(myfish, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)