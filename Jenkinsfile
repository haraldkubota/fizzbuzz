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
            sh '''pwd
'''
            
          }
        )
      }
    }
  }
  environment {
    MYENV = 'ThisIsMyEnvironmentVariable'
  }
}