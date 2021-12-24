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
        stage ('Cucumber Report') {
             steps{echo 'shubham'}
        }
        stage ('Timeline report') {
             steps{echo 'shubham'}
        }
        stage ('Email connection') {
             steps{echo 'shubham'}
        }

    }
 }