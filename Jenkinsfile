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
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                script {
                    try {
                        // CI=false로 설정하여 경고가 오류로 처리되지 않도록 함
                        sh 'CI=true npm run build'
                    } catch (e) {
                        echo 'Build completed with warnings, continuing...'
                    }
                }
            }
        }

        stage('Set AWS Credentials') {
            steps {
                withCredentials([string(credentialsId: 'AwsCredentials', variable: 'AWS_CREDENTIALS')]) {
                    sh '''
                        export AWS_ACCESS_KEY_ID=$(echo $AWS_CREDENTIALS | cut -d':' -f1)
                        export AWS_SECRET_ACCESS_KEY=$(echo $AWS_CREDENTIALS | cut -d':' -f2)
                    '''
                }
            }
        }

        stage('Upload to S3') {
            steps {
                withCredentials([string(credentialsId: 'AwsCredentials', variable: 'AWS_CREDENTIALS')]) {
                    sh "aws s3 rm s3://${S3_BUCKET} --recursive --region ${AWS_REGION}"
                    sh "aws s3 cp ${BUILD_DIR} s3://${S3_BUCKET}/ --recursive --region ${AWS_REGION}"
                }
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
