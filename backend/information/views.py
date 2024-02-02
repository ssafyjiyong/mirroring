from rest_framework.views import APIView
import json, random
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .weather import weatherAPI
from .sunset import sunsetAPI
from .models import fishing_method
from fish.models import fish, user_fish

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

def pickmethod():
    return random.choice([fishing_method.pk for f in fishing_method.weight])

def pickfish(method_id):
    # fishlist = []
#     for f in fish:
#         if f.method_id == method_id:
#             fishlist.append((f.pk, user_fish.f.preference))
    fishlist = [(f.pk, user_fish.f.preference) for f in fish if f.method_id == method_id]

    if fishlist:
        # preference 기준 sort
        fishlist.sort(key=lambda x: x[1], reverse=True)
        return fishlist[0][0]
    else:
        # method에 맞는 fish 없으면 random
        return random.choice([f.pk for f in fish])


class recommendationView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        pass