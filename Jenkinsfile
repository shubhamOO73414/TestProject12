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

                        Please check automation report.''', subject: 'Automation Report', to: 'www.shubhamyadav1996@gmail.com'
                        }
        }
        stage ('allure report') {
             steps{
             allure([
                             includeProperties: false,
                             jdk: 'C:\Program Files\Java\jre1.8.0_301\bin',
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