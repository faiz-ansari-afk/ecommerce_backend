
// strapi-api/config/database.js
module.exports = ({ env }) => ({
  
  connection: {
    client: "postgres",
    // connection: {
    //   host: "localhost",
    //   port: parseInt(5432),
    //   database: "ijazat_strapi",
    //   user: "postgres",
    //   password: "Faiz@850",
    //   // schema: env('DATABASE_SCHEMA', 'public'), // Not required
    //   ssl: false,
    // },
    connection: {
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
      database: process.env.DATABASE_NAME || 'ijazat_strapi',
      user: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'Faiz@850',
      // schema: process.env.DATABASE_SCHEMA || 'public', // Not required
      ssl: true,
    },
    debug: false,
  },
});
