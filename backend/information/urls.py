from django.urls import path
from .views import weatherSunsetAPIView

urlpatterns=[
    path('weatherSunset/',weatherSunsetAPIView.as_view()),
]