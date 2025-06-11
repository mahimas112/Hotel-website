pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = '5d1b5418-6e18-427d-928a-e1c1b2f58f4f' 
        DOCKER_IMAGE = 'mahima672/hotel-website'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: '93adf6ea-bcc6-4f46-9925-12bf70846c0e', 
                    url: 'https://github.com/mahimas112/Hotel-website.git', 
                    branch: 'main'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Define dockerImage variable properly
                    def dockerImage = docker.build("${DOCKER_IMAGE}")
                    // Store it in environment for later stages
                    env.DOCKER_IMAGE_ID = dockerImage.id
                }
            }
        }
        stage('Push to DockerHub') {
            steps {
                script {
                    // Rebuild the image reference
                    def dockerImage = docker.image("${DOCKER_IMAGE}")
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        dockerImage.push('latest')
                        dockerImage.push("${BUILD_NUMBER}") // Also push with build number
                    }
                }
            }
        }
        stage('Deploy Container') {
            steps {
                script {
                    // Check if running on Windows or Unix
                    if (isUnix()) {
                        sh 'docker rm -f hotel-container || true'
                        sh "docker run -d --name hotel-container -p 3000:80 ${DOCKER_IMAGE}:latest"
                    } else {
                        bat 'docker rm -f hotel-container || exit 0'
                        bat "docker run -d --name hotel-container -p 3000:80 ${DOCKER_IMAGE}:latest"
                    }
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
            echo "Application is running on: http://localhost:3000"
        }
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}
