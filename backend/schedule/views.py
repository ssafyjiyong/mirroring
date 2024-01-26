from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404

from .models import schedule
from .serializers import ScheduleAllSerializer,ScheduleDoneSerializer
from drf_yasg.utils import swagger_auto_schema

# Create your views here.


class SchedulesAPIView(APIView):
    #새 일정 등록 
    @swagger_auto_schema(request_body=ScheduleAllSerializer, responses={"200": ScheduleAllSerializer})
    def post(self, request):
        serializer=ScheduleAllSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class ScheduleDeleteAPIView(APIView):
    #해당 일정 삭제  
    @swagger_auto_schema(responses={"200": ScheduleAllSerializer})
    def delete(self, request,pk):
        object=schedule.objects.get(id=pk)
        object.delete()
        return Response(request.data,status=status.HTTP_200_OK)
    
    
class ScheduleDoneAPIView(APIView):  
    @swagger_auto_schema(request_body=ScheduleDoneSerializer, responses={"200": ScheduleDoneSerializer})
    def put(self, request,pk):
        object=get_object_or_404(schedule,id=pk)
        serializer=ScheduleDoneSerializer(object,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    
    

    
    
    

        
            




    
    

