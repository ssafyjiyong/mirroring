from django.urls import path
from . import views

urlpatterns = [
    # 회원 가입
    path('signup/', views.UserSignUpView.as_view(), name='signup'),
    
    # # 로그인
    path('signin/', views.UserSignInView.as_view(), name='signin'),

    # 로그아웃
    # path('signout/', views.UserSignOutView.as_view(), name='signout'),
    
    # # 회원 탈퇴
    # path('deleteid/', views.UserDeleteView.as_view(), name='deleteid'),
    
    # # 회원정보 수정
    # path('updateuser/', views.UserUpdateView.as_view(), name='updateuser'),
]
