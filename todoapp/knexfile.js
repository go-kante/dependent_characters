// Update with your config settings.

module.exports = {

  development: {
    client: "mysql",
    connection: {
      user: 'root',
      password: 'sk0422OK',
      database: 'todo_app',
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: 'sk0422OK',
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: 'sk0422OK',
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};