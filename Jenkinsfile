pipeline {
    agent any
    stages {
        stage('Prepare') {
            steps {
                echo 'Mdaas'
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Deploy') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Mdaas'
                sh 'ssh projects@44.239.126.131 "cd mdaas && git stash && git pull origin develop && npm install && pm2 restart mdaas"'
            }
            
        }
    }
}

