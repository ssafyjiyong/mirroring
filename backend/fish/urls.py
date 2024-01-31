from django.urls import path
from .views import FishView

urlpatterns = [
    path('', FishView.as_view(), name='fishlist'),
    # path('<int:pk>/', , name='fish'),
    # path('myfish/<int:pk>/', , name='userfish'),
]