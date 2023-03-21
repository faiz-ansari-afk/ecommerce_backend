// export default ({ env }) => {
//   const databaseUrl = new URL(env("DATABASE_URL", ""));
//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host: databaseUrl.hostname,
//         port: databaseUrl.port,
//         database: "pasha_strapi",
//         user: databaseUrl.username ?? "",
//         password: databaseUrl.password ?? "",
//         ssl: env.bool("DATABASE_SSL", false),
//       },
//     },
//   };
// };

// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "ijazat_strapi"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Faiz@850"),
      // schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false,
    },
    debug: false,
  },
});
