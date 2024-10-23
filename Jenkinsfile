pipeline {
    agent { label 'ec2-agent' }

    environment {
        GIT_BRANCH = 'main'
        GIT_REPO = 'https://github.com/chanyoungit/final-front'
        S3_BUCKET = 'devita-front'
        AWS_REGION = 'ap-northeast-2'
        AWS_CREDENTIALS = credentials('AwsCredentials')  // 'AwsCredentials'로 설정
        BUILD_DIR = './build'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Install Node.js and npm using NVM') {
            steps {
                sh '''
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                nvm install 14
                nvm use 14
                node --version
                npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Install AWS CLI') {
            steps {
                sh '''
                sudo apt-get update
                sudo apt-get install -y curl unzip
                curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
                unzip awscliv2.zip
                sudo ./aws/install
                '''
            }
        }

        stage('Set AWS Credentials') {
            steps {
                script {
                    def awsCredentials = "${env.AWS_CREDENTIALS}".split(':')
                    env.AWS_ACCESS_KEY_ID = awsCredentials[0]
                    env.AWS_SECRET_ACCESS_KEY = awsCredentials[1]
                }
            }
        }

        stage('Upload to S3') {
            steps {
                script {
                    sh "aws s3 rm s3://${S3_BUCKET} --recursive --region ${AWS_REGION}"
                }

                sh "aws s3 cp ${BUILD_DIR} s3://${S3_BUCKET}/ --recursive --region ${AWS_REGION}"
            }
        }
    }

    post {
        success {
            echo 'Build and upload to S3 succeeded!'
        }
        failure {
            echo 'Build or upload to S3 failed!'
        }
    }
}
