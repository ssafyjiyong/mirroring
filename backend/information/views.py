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
from review.models import method_reivew ,location_review

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
        
    selected_method = fishing_method.objects.get(pk=selected_method_id).title
    return selected_method_id, selected_method


def pick_fish(method_id, user):
    myfish = user_fish.objects.filter(user=user, fish__method__id=method_id)
    fishlist = [(uf.fish.pk, uf.preference) for uf in myfish]

    if fishlist:
        # preference 기준 sort
        fishlist.sort(key=lambda x: x[1], reverse=True)
        selected_fish_id = fishlist[0][0]
    else:
        # method에 맞는 fish 없으면 random
        selected_fish_id = random.choice([f.pk for f in fish.objects.all()])
        
    selected_fish = fish.objects.get(pk=selected_fish_id).name_kor
    return selected_fish_id, selected_fish

def pick_location(fish_id,user):
    # 해당 물고기를 잡을 수 있는 location_id 리스트
    location_list=location.objects.filter(fish=10)

    # print(location_list)
    location_ids=[]
    
    #location_review에서 location_id인 것과 가중치만 모은 리스트
    for lo in location_list:
        location_ids=[review.location for review in location_review.objects.filter(location=lo.pk,user=user)]
        location_weight=[review.weight for review in location_review.objects.filter(location=lo.pk,user=user)]
        
    print(location_ids)
    if location_ids:
        selected_location_id=random.choices(location_ids,location_weight)[0]        
        
    else:
        location_ids = [lo.pk for lo in location_list]
        selected_location_id=random.choice(location_ids)
        
    selected_location = location.objects.get(pk=selected_location_id).name       
    return selected_location_id, selected_location
    

# def pick_location(fish_id):
#     # fish pk가 fish_id인 것만 list 생성 
#     location_list = location.objects.filter(fish=fish_id)
#     print(location_list)
    
#     # 해당 위치의 id를 리스트로 생성 
#     location_ids = [lo.pk for lo in location_list]

#     selected_location_id = random.choice(location_ids)
#     selected_location = location.objects.get(pk=selected_location_id).name
#     return selected_location_id, selected_location


class recommendationView(APIView):
    permission_classes = [IsAuthenticated]

    # @method_decorator(login_required)
    def get(self, request):
        method_id, selected_method = pick_method(request.user)
        fish_id, selected_fish = pick_fish(method_id, request.user)
        location_id, selected_location = pick_location(fish_id,request.user)

        context = {
            "method_id": method_id,
            "selected_method": selected_method,
            "fish_id": fish_id,
            "selected_fish": selected_fish,
            "location_id": location_id,
            "selected_location": selected_location,
        }
        return Response(context, status=status.HTTP_200_OK)
