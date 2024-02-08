pipeline {
    agent any

    environment {
        DOCKER_IMAGE_NAME = 'backend/django'
        DOCKERFILE_PATH = './backend/Dockerfile'
        CONTAINER_NAME = 'django-server'
        DATABASE_NAME='mariadb'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                        cd ./backend
                        docker build -t ${DOCKER_IMAGE_NAME} .
                    '''
                }
            }
        }

        stage('Delete Previous Docker Container') {
            steps {
                script {
                    sh '''
                        docker stop ${CONTAINER_NAME}
                        docker rm ${CONTAINER_NAME}
                    '''
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d --link ${DATABASE_NAME} --name ${CONTAINER_NAME} -p 3000:3000 ${DOCKER_IMAGE_NAME}"
                }
            }
        }
    }
}