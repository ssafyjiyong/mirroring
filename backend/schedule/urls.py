from django.urls import path
from .views import NewScheduleAPIView, ScheduleAPIView

urlpatterns=[
    path('',NewScheduleAPIView.as_view()),
    path('<int:pk>/',ScheduleAPIView.as_view()),
]