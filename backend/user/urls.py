from django.urls import path, include
from .views import CustomRegisterView, UserProfileView, LoginView, GoogleLoginView, GoogleOAuthCallbackView

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    # path('login/', LoginView.as_view(), name='login'),
    path('register/', include('dj_rest_auth.registration.urls')),
    # path('register/', CustomRegisterView.as_view(), name='rest_register'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    
    # path("", include("allauth.urls")),  # OAuth 관련 작업에서도 필요함, Reverse name 때문에
    # google OAuth
    path(
        "google/login/callback/",
        GoogleOAuthCallbackView.as_view(),
        name="api_accounts_google_oauth_callback",
    ),
    path(
        "google/login/",
        GoogleLoginView.as_view(),
        name="api_accounts_google_oauth",
    )
]
