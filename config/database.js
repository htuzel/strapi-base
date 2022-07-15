const fs = require('fs');
const mysql = require('mysql2');


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql2',
    connection: {
      host: env('DATABASE_HOST', 'db-mysql-fra1-get-do-user-3818724-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'VgcvGfeaDS5IWE4b'),
      ssl: {
        ca: fs.readFileSync(`${__dirname}/ca-certificate.crt`).toString(),
      },
    },
    debug: false,
  },
});