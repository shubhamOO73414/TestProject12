pipeline {
    agent any
    stages {
        stage ('install dependecies') {
           steps{
            bat 'npm install'
           }
        }
        stage ('Sauce lab') {
             steps{bat 'npm run test'}
        }
        stage ('Email sent') {
             steps{emailext body: '''Hi Shubham,

                        Please check automation report.''', subject: 'Automation daily Report', to: 'www.shubhamyadav1996@gmail.com'
                        }
        }
        stage ('allure report') {
             steps{
             allure([
                             includeProperties: false,
                             jdk: '',
                             properties: [],
                             reportBuildPolicy: 'ALWAYS',
                             results: [[path: 'report/allure-results']]
                           ])


             }
        }
        stage ('Junit report') {
             steps{  junit './report/junit/*.xml'}
        }

    }
 }