from django.shortcuts import render
from rest_framework.views import APIView
import json
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema

from .weather import weatherAPI
from .sunset import sunsetAPI
from .serializers import recommendationSerializer

class weatherSunsetAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        data=json.loads(request.body)       
        
        nowData=weatherAPI(data['lat'],data['lon'])
        sunrise,sunset=sunsetAPI(data['lat'],data['lon'])
        
        context={
            "weather":nowData,
            "sunrise":sunrise,
            "sunset":sunset,   
        }
                    
        return Response(context, status=status.HTTP_200_OK)

class recommendationView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(responses={"200": recommendationSerializer})
    def get(self, request):
        pass