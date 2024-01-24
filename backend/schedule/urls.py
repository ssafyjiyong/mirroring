from django.urls import path

from .views import ScheduleDeleteAPIView,SchedulesAPIView,ScheduleDoneAPIView
urlpatterns=[
    path('post/',SchedulesAPIView.as_view()),
    path('delete/<int:pk>',ScheduleDeleteAPIView.as_view()),
    path('put/<int:pk>',ScheduleDoneAPIView.as_view())
]