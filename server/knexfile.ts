import knex from 'knex';
import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection:{
    filename: process.env.NODE_ENV === 'test' ? path.resolve(__dirname, 'src','database', 'databaseTest','database.test.sqlite') : path.resolve(__dirname, 'src','database','database.sqlite')
  },
  migrations:{
    directory: path.resolve(__dirname, 'src','database','migrations')
  },
  useNullAsDefault: true
};