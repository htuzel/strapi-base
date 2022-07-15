module.exports = {
  apps: [{
    name: 'strapi',
    cwd: '/home/forge/cms.tagmetrica.com',
    script: 'npm',
    args: 'start',
    exec_mode: "cluster",
    env: {
      NODE_ENV: 'production',
      DATABASE_HOST: 'private-db-mysql-fra1-get-do-user-3818724-0.b.db.ondigitalocean.com', // database endpoint
      DATABASE_PORT: '25060',
      DATABASE_NAME: 'strapi', // DB name
      DATABASE_USERNAME: 'forge', // your username for psql
      DATABASE_PASSWORD: 'aM6fNpTqhCBJXlaE', // your password for psql
      PORT: '1337',
      APP_KEYS: 'gZMvdFpMZtTAPw/UKnSrYg==,BGL70ZOdy+5+KqWJmKAp1Q==,Ridf9FBCVV5Bzl34w0GaDQ==,6eG411y3A/z3BDKd3cWxNQ==',
      API_TOKEN_SALT: 'HzLbgNpwmWWtkl6oYkkaDw==',
      ADMIN_JWT_SECRET: 'R9S/AMcXQKFt1XYnDrLAHg==',
      JWT_SECRET: 'zkSyqIEoAjzycpOadGTn3w=='
    },
  }, ],
};