require('dotenv').config({ path: "./.env.deploy"});

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/main',
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
      repo: 'https://github.com/Qolit3/Deploy-front.git',
      path: DEPLOY_PATH,
      'post-deploy': 'npm i && npm run build',
    },
  },
}