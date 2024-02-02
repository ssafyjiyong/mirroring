from rest_framework.views import APIView
import json, random
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.utils.decorators import method_decorator

from .weather import weatherAPI
from .sunset import sunsetAPI
from .models import fishing_method
from fish.models import fish, user_fish
from review.models import method_reivew

from location.models import location


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


def pick_method(user):
    method_reviews = method_reivew.objects.filter(user=user)
    method_ids = [review.method_id for review in method_reviews]
    weights = [review.weight for review in method_reviews]

    if weights:
        selected_method_id = random.choices(method_ids, weights)[0]
    else:
        selected_method_id = random.choice(method_ids)
    return selected_method_id


def pick_fish(method_id, user):
    myfish = user_fish.objects.filter(user=user, fish__method__id=method_id)
    fishlist = [(uf.fish.pk, uf.preference) for uf in myfish]

    if fishlist:
        # preference 기준 sort
        fishlist.sort(key=lambda x: x[1], reverse=True)
        return fishlist[0][0]
    else:
        # method에 맞는 fish 없으면 random
        return random.choice([f.pk for f in fish.objects.all()])


def pick_location(fish_id):
    # fish pk가 fish_id인 것만 list 생성 
    location_list=location.objects.filter(fish=fish_id)
    
    # 해당 위치의 id를 리스트로 생성 
    location_ids=[lo.pk for lo in location_list]

    id=random.choice(location_ids)
    return id


class recommendationView(APIView):
    permission_classes = [IsAuthenticated]

    # @method_decorator(login_required)
    def get(self, request):
        m = pick_method(request.user)
        f = pick_fish(m, request.user)
        l = pick_location(f)
        context={
            "method_id": m,
            "fish_id": f,
            "location_id": l,   
        }
        return Response(context, status=status.HTTP_200_OK)
