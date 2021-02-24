module.exports = {
  MONGODB: process.env.NODE_ENV == 'development' ? 'mongodb://localhost/merng' : process.env.DB_CONNECTION_URL,
  SECRET_KEY: process.env.SECRET_KEY
}