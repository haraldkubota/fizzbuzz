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
			sh 'rm -rf node_modules; npm i'
		}
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                nodejs(nodeJSInstallationName: 'Node 10.x') {
			sh 'npm test'
		}
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
		nodejs(nodeJSInstallationName: 'Node 10.x') {
                	sh 'npm run app'
		}
            }
        }
    }
}

