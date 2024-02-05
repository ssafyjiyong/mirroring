from django.urls import path
from .views import locationAPIView,locationMapAPIView

urlpatterns=[
    path('',locationAPIView.as_view()),
    path('map/',locationMapAPIView.as_view()),
]