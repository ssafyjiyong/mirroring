from django.urls import path

from .views import ScheduleAPIView

urlpatterns=[
    path('',ScheduleAPIView)
]