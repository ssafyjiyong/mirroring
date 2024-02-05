from django.urls import path
from .views import MethodAPIView

urlpatterns=[
    path('method/',MethodAPIView.as_view()),
]