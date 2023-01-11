require('dotenv').config()
module.exports = {
  development: {
    database: "myPlates",
    dialect: "postgres"
  },
  test: {
    database: "myPlates",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    dialectOption:{
      ssl:{
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
