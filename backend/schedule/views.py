from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Schedule
from .serializers import ScheduleAllSerializer


# Create your views here.
class ScheduleAPIView(APIView):
    #새 일정 등록 
    def post(self,request):
        serializer=ScheduleAllSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    


