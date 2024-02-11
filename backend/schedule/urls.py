from django.urls import path
from .views import NewScheduleAPIView, ScheduleAPIView

urlpatterns=[
    path('',NewScheduleAPIView.as_view()),
    path('myschedule/',ScheduleAPIView.as_view()),
]