FROM python:3.12.1

RUN apt-get -y update
RUN apt-get -y install vim

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend

COPY requirements.txt .

RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

RUN python manage.py makemigrations

CMD ["sh","-c","gunicorn --bind 0.0.0.0:8000 config.wsgi:application && python manage.py migrate "]
# CMD ["sh","-c","python manage.py runserver 0.0.0.0:8000 && python manage.py migrate"]

