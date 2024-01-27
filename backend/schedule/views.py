from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from .models import schedule
from .serializers import ScheduleAllSerializer, ScheduleDoneSerializer

# Create your views here.
class NewScheduleAPIView(APIView):
    # 새 일정 등록 
    @swagger_auto_schema(request_body=ScheduleAllSerializer, responses={"201": ScheduleAllSerializer})
    def post(self, request):
        serializer = ScheduleAllSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ScheduleAPIView(APIView):
    
    # 일정 수정
    @swagger_auto_schema(request_body=ScheduleDoneSerializer, responses={"200": ScheduleDoneSerializer})
    def put(self, request,pk):
        schedule_instance = get_object_or_404(schedule, id=pk)
        serializer = ScheduleDoneSerializer(schedule_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # 일정 삭제  
    @swagger_auto_schema(responses={"204": ScheduleAllSerializer})
    def delete(self, request, pk):
        schedule_instance = schedule.objects.get(id=pk)
        schedule_instance.delete()
        return Response(request.data, status=status.HTTP_204_NO_CONTENT)
    