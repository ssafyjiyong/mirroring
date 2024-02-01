from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import methodReviewSerializer
from .models import method_reivew
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema

# Create your views here.
class MethodAPIView(APIView):
    permission_classes = [IsAuthenticated]
    
    @swagger_auto_schema(request_body=methodReviewSerializer, responses={"200": methodReviewSerializer})
    def post(self, request):
        user=request.user.pk
        method_instance=method_reivew.objects.filter(method_id=request.data['method'],user_id=user).first()
        print(method_instance)
        
        # 이미 존재하는 방법에 대한 리뷰 갱신일 때 
        if method_instance:
            #put
            serializer=methodReviewSerializer(method_instance,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_200_OK)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)        
        
        #새로운 방법에 대한 리뷰일 때 
        else:         
            serializer=methodReviewSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  
        
        
