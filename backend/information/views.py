from django.shortcuts import render
from rest_framework.views import APIView
import json
from rest_framework.response import Response
from rest_framework import status

from .weather import weatherAPI

class weatherAPIView(APIView):
    def get(self, request):
        data=json.loads(request.body)       
        
        nowData=weatherAPI(data['lat'],data['lon'])
               
        context={
            "result":nowData
        }
                    
        return Response(context, status=status.HTTP_200_OK)
        
    