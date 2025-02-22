// no need to change this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true, // needed for sqlite
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: { // needed for sqlite if there are more than one table
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/dealer.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
}
