pipeline {
    agent { label 'ec2-devita-front' }

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

        stage('Install Dependencies') {
            steps {
                // npm 설치 확인 후 실행
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
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
