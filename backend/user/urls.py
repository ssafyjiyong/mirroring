from django.urls import path
from . import views

urlpatterns = [
    # 회원 가입
    path('signup/', views.signup, name='signup'),
    
    # 로그인
    path('signin/', views.signin, name='signin'),

    # 로그아웃
    path('signout/', views.signout, name='signout'),
    
    # 회원 탈퇴
    path('deleteid/', views.deleteid, name='deleteid'),
    
    # 회원정보 수정
    path('updateuser/', views.updateuser, name='updateuser'),
]
