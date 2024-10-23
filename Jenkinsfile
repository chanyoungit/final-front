pipeline {
    agent { label 'ec2-agent' }

    environment {
        GIT_BRANCH = 'main'
        GIT_REPO = 'https://github.com/chanyoungit/final-front'
        S3_BUCKET = 'devita-front'
        AWS_REGION = 'ap-northeast-2'
        AWS_ACCESS_KEY_ID = credentials('AwsAccessKey')
        AWS_SECRET_ACCESS_KEY = credentials('AwsSecretKey')
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
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
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
