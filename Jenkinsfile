pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = '5d1b5418-6e18-427d-928a-e1c1b2f58f4f' 
        DOCKER_IMAGE = 'mahima672/hotel-website'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: '93adf6ea-bcc6-4f46-9925-12bf70846c0e', url: 'https://github.com/mahimas112/Hotel-website.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${DOCKER_IMAGE}")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh 'docker rm -f hotel-container || true'
                    sh "docker run -d --name hotel-container -p 8080:80 ${DOCKER_IMAGE}:latest"
                }
            }
        }
    }

    post {
        failure {
            echo "Build Failed"
        }
        success {
            echo "Build and Deployment Successful!"
        }
    }
}
