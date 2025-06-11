pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = '5d1b5418-6e18-427d-928a-e1c1b2f58f4f' 
        DOCKER_IMAGE = 'mahima672/hotel-website'
        DOCKER_TAG = "${BUILD_NUMBER}"
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
                    echo "Building Docker image: ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    // Login to Docker Hub first to pull base images
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        if (isUnix()) {
                            sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                            sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                        } else {
                            bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                            bat "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                        }
                    }
                }
            }
        }
        
        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        echo "Pushing Docker image to DockerHub..."
                        if (isUnix()) {
                            sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                            sh "docker push ${DOCKER_IMAGE}:latest"
                        } else {
                            bat "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                            bat "docker push ${DOCKER_IMAGE}:latest"
                        }
                    }
                }
            }
        }
        
        stage('Deploy Container') {
            steps {
                script {
                    echo "Deploying container..."
                    if (isUnix()) {
                        // Stop and remove existing container if it exists
                        sh 'docker stop hotel-container || true'
                        sh 'docker rm hotel-container || true'
                        // Run new container
                        sh "docker run -d --name hotel-container -p 3000:80 ${DOCKER_IMAGE}:latest"
                    } else {
                        // Stop and remove existing container if it exists
                        bat 'docker stop hotel-container || exit 0'
                        bat 'docker rm hotel-container || exit 0'
                        // Run new container
                        bat "docker run -d --name hotel-container -p 3000:80 ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }
        
        stage('Verify Deployment') {
            steps {
                script {
                    echo "Verifying deployment..."
                    if (isUnix()) {
                        sh 'docker ps | grep hotel-container'
                    } else {
                        bat 'docker ps | findstr hotel-container'
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "✅ Build and Deployment Successful!"
            echo "🌐 Application is running on: http://localhost:3000"
            echo "📦 Docker image pushed: ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
        failure {
            echo "❌ Build Failed - Check logs above for details"
            script {
                // Clean up failed build artifacts
                if (isUnix()) {
                    sh 'docker system prune -f || true'
                } else {
                    bat 'docker system prune -f || exit 0'
                }
            }
        }
        always {
            echo "🧹 Cleaning up workspace..."
            cleanWs()
        }
    }
}
