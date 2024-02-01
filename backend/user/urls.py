from django.urls import path, include
from .views import CustomRegisterView, UserProfileView, LoginView

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    # path('login/', LoginView.as_view(), name='login'),
    path('register/', include('dj_rest_auth.registration.urls')),
    # path('register/', CustomRegisterView.as_view(), name='rest_register'),
    path('profile/', UserProfileView.as_view(), name='profile'),
]
