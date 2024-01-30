from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import locationMapSerializer
from .models import location
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class locationAPIView(APIView):
    def get(self, request):
        location_all=location.objects.values()
        return Response(location_all,status=status.HTTP_200_OK)
    
class locationMapAPIView(APIView):
    def get(self, request):
        maps=location.objects.values()
        map_serializer=locationMapSerializer(maps,many=True)
        return Response(map_serializer.data,status=status.HTTP_200_OK)
    
    
        
        
        
        

