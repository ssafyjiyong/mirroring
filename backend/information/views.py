from django.shortcuts import render
from rest_framework.views import APIView
import json
from rest_framework.response import Response
from rest_framework import status

from .weather import weatherAPI
from .sunset import sunsetAPI

class weatherSunsetAPIView(APIView):
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
        