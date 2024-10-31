pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/IsmaelGabrielDev/testes-e2e-ebac.git'
                bat 'npm isntall'
            }
        }
        stage('Test') {
            steps {
                bat '''set NO_COLOR=1
npm run cy:run'''
            }
        }
    }
}