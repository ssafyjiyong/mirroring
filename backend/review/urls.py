from django.urls import path
from .views import MethodAPIView

urlpatterns=[
    path('',MethodAPIView.as_view()),
]