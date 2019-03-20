module.exports = {
  apps : [{
    name: 'CLSNO',
    script: './server/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'exty',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:extender01/CLSNO-app.git',
      path : '/var/www/clsno/html',
      'post-deploy' : 'npm install && cd client && npm install && cd .. &&pm2 reload ecosystem.config.js --env production'
    }
  }
};
