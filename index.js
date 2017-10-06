#!/usr/bin/env node

'use strict';

const program = require('commander');
const mysql = require('mysql');
const {promisify} = require('util');
const readFile = promisify(require('fs').readFile);

program
  .version('0.1.0')
  .arguments('<file>')
  .usage('<file> [options]')
  .option('--host [optional]', 'The hostname of the database you are connecting to.')
  .option('--port [optional]', 'The port number to connect to.')
  .option('--user <required>', 'The MySQL user to authenticate as.')
  .option('--password <required>', 'The password of that MySQL user.')
  .option('--socketPath [optional]', 'The path to a unix domain socket to connect to. When used host and port are ignored.')
  .option('--database <required>', 'Name of the database to use for this connection')
  .action((filename, options) =>
    runSQL(filename, options)
      .catch(err => {
        console.error(err);
        process.exit(1);
      })
  );

program.parse(process.argv);

async function runSQL(filename, {host, port, user, password, socketPath, database}) {
  const connection = mysql.createConnection({
    host, port, user, password, socketPath, database,
    multipleStatements: true
  });

  connection.connect();

  const sql = await readFile(filename, 'utf8');

  connection.query(sql, err => {
    if (err) throw err;

    console.log('Query run successfully');
  });

  connection.end();
}
