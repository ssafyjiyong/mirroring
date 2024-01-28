from django.urls import path
from .views import weatherAPIView

urlpatterns=[
    path('weather/',weatherAPIView.as_view()),
]