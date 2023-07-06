require('dotenv').config({ path: "./.env.deploy"});

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPO , DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
  apps : [{
    name   : "app1",
    script : "./app.js"
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      'post-deploy': 'npm i && npm run build',
    },
  },
}