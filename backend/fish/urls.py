from django.urls import path
from .views import FishView, FishListView, MyFishListView, MyFishView

urlpatterns = [
    path('', FishListView.as_view(), name='fishlist'),
    path('<int:pk>/', FishView.as_view(), name='fish'),
    path('myfish/', MyFishListView.as_view(), name='myfishlist'),
    # path('myfish/<int:pk>/', , name='userfish'),
]