SECRET_KEY = 'django-insecure-+2mf8%rjevr9)4m(afbb=rq9vm4&qofrc@eirn%^pxse%brc81'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql', # mysqlclient librarly 설치
        'NAME': 'fubao',
        'USER': 'root',
        'PASSWORD': 'root', # mariaDB 설치 시 입력한 root 비밀번호 입력
        'HOST': 'localhost',
        'PORT': '' # 안적으면 기본 포트 번호(3306)
    }
}

SOCIAL_AUTH_GOOGLE_PROJECT_ID = 'fubao-412203'
SOCIAL_AUTH_GOOGLE_CLIENT_ID = '1039425430939-5lpakcd1b8co02ld13qte7g4p2l7sdl4.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_SECRET_KEY = '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'
