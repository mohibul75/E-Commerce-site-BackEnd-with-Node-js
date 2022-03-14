// Declarative //
pipeline {
     agent any
    

    stages {

           stage("Checkout SCM"){
            steps {
                git credentialsId: 'purbo75', url: 'https://github.com/purbo75/E-Commerce-site-BackEnd-with-Node-js.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building..'
               
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh'pm2 start index.js '
                sh 'pm2 restart index --watch'
            }
        }
    }
}