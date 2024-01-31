from django.urls import path, include
from .views import UserProfileView
from dj_rest_auth.views import (LoginView, LogoutView, PasswordChangeView, PasswordResetConfirmView, PasswordResetView,)

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    # path('login/', LoginView.as_view(), name='rest_login'),
    # path('logout/', LogoutView.as_view(), name='rest_logout'),
    # path('password/', PasswordChangeView.as_view(), name='rest_password_change'),
    # path('password/reset/', PasswordResetView.as_view(), name='rest_password_reset'),
    # path('password/reset/confirm/', PasswordResetConfirmView.as_view(), name='rest_password_reset_confirm'),
    path('register/', include('dj_rest_auth.registration.urls')),
    path('profile/', UserProfileView.as_view(), name='profile'),
]
