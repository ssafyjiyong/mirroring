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
RUN python manage.py migrate


# CMD ["gunicorn","--bind","0.0.0.0:8000","stock.wsgi:application"]
CMD ["python","manage.py","runserver","0.0.0.0:8000"]

