
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/todoList.db3'
    },
    migrations: {
      directory: './api/migrations'
    },
    seeds: {
      directory: './api/seeds'
    },
    useNullAsDefault: true,
  }
};
