pipeline {
    agent { label 'ec2-devita-front' }

    environment {
        GIT_BRANCH = 'main'
        GIT_REPO = 'https://github.com/chanyoungit/final-front'
        S3_BUCKET = 'devita-front'
        AWS_REGION = 'ap-northeast-2'
        AWS_CREDENTIALS = credentials('ayaan_aws')  // 크리덴셜 ID를 'ayaan_aws'로 설정
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
                // sh 'npm install --save-dev @babel/plugin-proposal-private-property-in-object'
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Set Aws') {
            steps {
                script {
                    sh '''
                    export AWS_ACCESS_KEY_ID=$(echo $AWS_CREDENTIALS | cut -d':' -f1)
                    export AWS_SECRET_ACCESS_KEY=$(echo $AWS_CREDENTIALS | cut -d':' -f2)

                    aws s3 rm s3://${S3_BUCKET} --recursive --region ${AWS_REGION}
                    aws s3 cp ${BUILD_DIR} s3://${S3_BUCKET}/ --recursive --region ${AWS_REGION}
                    '''
                }
            }
        }
                

        // stage('Build Project') {
        //     steps {
        //         script {
        //             try {
        //                 sh 'unset CI && npm run build --silent'
        //             } catch (e) {
        //                 echo 'Build completed with warnings, continuing...'
        //             }
        //         }
        //     }
        // }

        // stage('Upload to S3') {
        //     steps {
        //         withCredentials([[$class: 'AmazonWebServicesCredentials', credentialsId: 'ayaan_aws']]) {  // 크리덴셜 ID를 'ayaan_aws'로 설정
        //             // AWS CLI에 사용할 환경 변수를 설정합니다.
        //             script {
        //                 env.AWS_ACCESS_KEY_ID = "${AWS_CREDENTIALS.accessKey}"
        //                 env.AWS_SECRET_ACCESS_KEY = "${AWS_CREDENTIALS.secretKey}"

        //                 // S3에 파일을 업로드합니다.
        //                 sh "aws s3 rm s3://${S3_BUCKET} --recursive --region ${AWS_REGION}"
        //                 sh "aws s3 cp ${BUILD_DIR} s3://${S3_BUCKET}/ --recursive --region ${AWS_REGION}"
        //             }
        //         }
        //     }
        // }
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
