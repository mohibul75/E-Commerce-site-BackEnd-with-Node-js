// Declarative //
pipeline {
     agent any
    

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh'npm install'
                sh'npm install pm2 -g'
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
                sh'pm2 start index.js'
            }
        }
    }
}