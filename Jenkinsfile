pipeline {
    agent any

    environment {
        BACK_DOCKER_IMAGE_NAME = 'backend/django'
        DOCKERFILE_PATH = './backend/Dockerfile'
        BACK_CONTAINER_NAME = 'django-server'

        FRONT_DOCKER_IMAGE_NAME='frontend/react'
        FRONT_CONTAINER_NAME='react-client'

        DATABASE_NAME='mariadb'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Parallel Build Docker Image') {
            parallel{
                stage('front Build Docker Image'){
                    steps {
                        script {
                            sh '''
                                cd ./frontend/fubao-app-pwa
                                docker build -t ${FRONT_DOCKER_IMAGE_NAME} .
                            '''
                        }
                    }
                }


                stage('back Build Docker Image'){
                    steps {
                        script {
                            sh '''
                                cd ./backend
                                docker build -t ${BACK_DOCKER_IMAGE_NAME} .
                            '''
                        }
                    }
                }

                
            }

        }

        stage('Delete Previous Docker Container') {
            steps {
                script {
                    sh '''
                        docker stop ${BACK_CONTAINER_NAME}
                        docker rm ${BACK_CONTAINER_NAME}
                    '''
                }
            }
        }

        stage('Parallel Run Docker Container') {
            parallel{
                stage('Run Front Docker Contatiner'){
                    steps {
                        script {
                            sh "docker run -d --name ${FRONT_CONTAINER_NAME} -p 3000:3000 ${FRONT_DOCKER_IMAGE_NAME}"
                        }
                    }
                }

                stage('Run Back Docker Contatiner'){
                    steps {
                        script {
                            sh "docker run -d --link ${DATABASE_NAME} --name ${BACK_CONTAINER_NAME} -p 8000:8000 ${BACK_DOCKER_IMAGE_NAME}"
                        }
                    }
                }


            }
        }
    }
}