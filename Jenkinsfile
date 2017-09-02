pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        parallel(
          "Test": {
            isUnix()
            
          },
          "Run": {
            sh '''npm test
'''
            
          }
        )
      }
    }
  stage('Run') {
    steps {
      "Run": {
        sh '''npm run app
'''
        }
      }
    }
  }
  environment {
    MYENV = 'ThisIsMyEnvironmentVariable'
  }
}