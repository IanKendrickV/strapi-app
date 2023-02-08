export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi_app_db'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'IanKendrick_9001'),
      ssl: env.bool('DATABASE_SSL', true),
      charset   : 'utf8mb4',
      collation : 'utf8mb4_unicode_ci'
    },
  },
});
