pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Getting source code...'
                checkout scm
            }
        }
        stage('Build') {
            steps {
		nodejs(nodeJSInstallationName: 'Node 10.x') {
			sh 'npm config ls'
		}
                sh 'rm -rf node_moduled ; npm i'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
        stage('Run') {
            steps {
                echo 'Running....'
                sh 'npm run app'
            }
        }
    }
}

