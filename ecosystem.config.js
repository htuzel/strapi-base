module.exports = {
  apps: [{
    name: 'strapi',
    cwd: '/home/forge/default',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      DATABASE_HOST: 'private-db-mysql-fra1-get-do-user-3818724-0.b.db.ondigitalocean.com', // database endpoint
      DATABASE_PORT: '25060',
      DATABASE_NAME: 'strapi', // DB name
      DATABASE_USERNAME: 'forge', // your username for psql
      DATABASE_PASSWORD: 'aM6fNpTqhCBJXlaE' // your password for psql
    },
  }, ],
};