from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [
    # 회원 가입
    path('signup/', views.UserSignUpView.as_view(), name='signup'),
    
    # # 로그인
    path('signin/', views.UserSignInView.as_view(), name='signin'),

    # 구글 소셜로그인
    path('google/login/', views.GoogleLoginView.as_view(), name='google_login'),
    path('google/callback/', views.GoogleCallbackView.as_view(), name='google_callback'),

    # 로그아웃
    # path('signout/', views.UserSignOutView.as_view(), name='signout'),
    
    # # 회원 탈퇴
    # path('deleteid/', views.UserDeleteView.as_view(), name='deleteid'),
    
    # # 회원정보 수정
    # path('updateuser/', views.UserUpdateView.as_view(), name='updateuser'),
]
