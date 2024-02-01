from django.urls import path, include
from .views import CustomRegisterView, UserProfileView, LoginView
# from dj_rest_auth.views import LoginView, LogoutView, PasswordChangeView
# from dj_rest_auth.app_settings import api_settings

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    # path('login/', LoginView.as_view(), name='login'),
    # path('login/', LoginView.as_view(), name='rest_login'),
    # path('logout/', LogoutView.as_view(), name='rest_logout'),
    # path('password/change/', PasswordChangeView.as_view(), name='rest_password_change'),
    path('register/', include('dj_rest_auth.registration.urls')),
    # path('register/', CustomRegisterView.as_view(), name='rest_register'),
    path('profile/', UserProfileView.as_view(), name='profile'),
]
