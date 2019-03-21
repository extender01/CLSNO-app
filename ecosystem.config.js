module.exports = {
  apps : [{
    name: 'CLSNO',
    script: './server/server.js',
    cwd: '/var/www/clsno/html/',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: '3000',
      MONGODB_URI: 'mongodb://127.0.0.1:27017/Exterky',
      JWT_SECRET: 'ouwefwegoinoxqwucbi2f-daxcvbs/dsaf'
    },
    env_production: {
      NODE_ENV: 'productionpyco',
      MONGODB_URI: 'mongodb://127.0.0.1:27017/Exterky',
      JWT_SECRET: 'ouwefwegoinoxqwucbi2f-daxcvbs/dsaf'
    },
    env_pyco: {
      NODE_ENV: 'productionpycoFCB',
      MONGODB_URI: 'mongodb://127.0.0.1:27017/Exterky',
    }
  }],

  deploy : {
    production : {
      user : 'exty',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:extender01/CLSNO-app.git',
      path : '/var/www/clsno/html',
      'post-deploy' : 'npm install && cd client && npm install && npm run build:prod && cd .. &&pm2 reload ecosystem.config.js && pm2 stop CLSNO && pm2 del CLSNO && pm2 start ecosystem.config.js && pm2 reload ecosystem.config.js'
    }
  }
};
