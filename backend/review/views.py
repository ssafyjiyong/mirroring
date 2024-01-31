from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import methodReviewSerializer,methodputSerializer
from .models import method_reivew
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class MethodAPIView(APIView):
    def post(self, request):
        user=request.user.pk
        method_instance=method_reivew.objects.filter(method_id=request.data['method'],user_id=user)
        if method_instance:
            #put
            serializer=methodputSerializer(method_instance,data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_200_OK)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)        
        else:
            #post
            serializer=methodReviewSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  
        # serializer=methodReviewSerializer(data=request.data)
        
        
