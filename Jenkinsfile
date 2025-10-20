pipeline {
  agent any
  environment {
    APP_NAME    = "static-site"
    DOCKER_NET  = "edge"
    STATE_DIR   = "/srv/ci-state/static-site"
    ACTIVE_FILE = "${STATE_DIR}/active.txt"
  }
  options { timestamps(); ansiColor('xterm') }

  stages {
    stage('Checkout'){ steps { checkout scm } }

    stage('Build image'){
      steps {
        sh '''
          set -e
          DOCKER_BUILDKIT=1 docker build -t ${APP_NAME}:${GIT_COMMIT} .
          docker tag ${APP_NAME}:${GIT_COMMIT} ${APP_NAME}:latest || true
        '''
      }
    }

    stage('Start candidate'){
      steps {
        sh '''
          set -e
          NEW_NAME=${APP_NAME}_${GIT_COMMIT}

          docker run -d --name $NEW_NAME \
            --restart unless-stopped \
            ${APP_NAME}:${GIT_COMMIT}

          echo "Waiting for health..."
          for i in $(seq 1 30); do
            s=$(docker inspect -f '{{.State.Health.Status}}' $NEW_NAME 2>/dev/null || echo none)
            [ "$s" = "healthy" ] && break
            sleep 2
          done
          [ "$s" = "healthy" ] || { docker logs --tail=200 $NEW_NAME || true; docker rm -f $NEW_NAME || true; exit 1; }

          echo $NEW_NAME > ${WORKSPACE}/candidate_name.txt
        '''
      }
    }

    stage('Promote (alias swap)'){
      steps {
        sh '''
          set -e
          NEW_NAME=$(cat ${WORKSPACE}/candidate_name.txt)
          mkdir -p ${STATE_DIR}
          OLD_NAME=""
          [ -f ${ACTIVE_FILE} ] && OLD_NAME=$(cat ${ACTIVE_FILE})

          # Attach NEW to the public network with alias 'site-active'
          docker network connect --alias site-active ${DOCKER_NET} $NEW_NAME

          # Detach OLD (if any)
          if [ -n "$OLD_NAME" ]; then
            docker network disconnect ${DOCKER_NET} $OLD_NAME || true
          fi

          echo $NEW_NAME > ${ACTIVE_FILE}
          echo $OLD_NAME > ${STATE_DIR}/old_to_delete.txt
        '''
      }
    }

    stage('Cleanup old'){
      steps {
        sh '''
          set -e
          OLD_NAME=$(cat ${STATE_DIR}/old_to_delete.txt 2>/dev/null || true)
          [ -n "$OLD_NAME" ] && docker rm -f $OLD_NAME || true
          rm -f ${STATE_DIR}/old_to_delete.txt || true

          docker image prune -f || true
          docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Image}}"
        '''
      }
    }
  }
}