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

        stage('timeline report'){
            steps{
//             publishHTML ([allowMissing: false,
//              alwaysLinkToLastBuild: true,
//               keepAll: false,
//                reportDir: 'report/timeline',
//                reportFiles: 'timeline-report.html',
//                reportName: 'Timeline report',
//               reportTitles: 'Timeline report'])

              publishHTML (target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'report/timeline',
                    reportFiles: 'timeline-report.html',
                    reportName: "Timeline report"
                  ])
            }
        }
        stage ('Junit report') {
                     steps{  junit './report/junit/*.xml'}
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


    }
//     post {
//             always {
//                 cleanWs()
//             }
//         }
}