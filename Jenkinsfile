pipeline {
    agent any
    stages {
        stage ('install dependecies') {
           steps{
            bat 'npm install'
           }
        }
        stage ('Sauce lab') {
             steps{bat 'npm run wdio'}
        }
        stage ('Email sent') {
             steps{emailext body: '''Hi Shubham,

                        Please check automation report.''', subject: 'Automation Report', to: 'www.shubhamyadav1996@gmail.com'
                        }
        }
        stage ('Timeline report') {
             steps{echo 'shubham'}
        }
        stage ('Junit report') {
             steps{junit './report/junit/*.xml'}
        }

    }
 }