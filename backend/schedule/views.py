from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .models import Schedule
from .serializers import ScheduleAllSerializer

# Create your views here.
@api_view(['POST'])
    #새 일정 등록 
def ScheduleAPIView(request):
    serializer=ScheduleAllSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    


