from django.urls import path
from .views import weatherSunsetAPIView

urlpatterns=[
    path('weatherSunset/<float:lat>/<float:lon>',weatherSunsetAPIView.as_view()),
]