from django.urls import path
from .views import weatherSunsetAPIView, recommendationView

urlpatterns=[
    path('recommendation/', recommendationView.as_view(), name='recommendation'),
    path('weatherSunset/',weatherSunsetAPIView.as_view()),
]