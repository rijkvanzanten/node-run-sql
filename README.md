# node-run-sql
Script that'll read a SQL file and run the query in the specified db

## Installation
Install this package by running `$ npm install -g run-sql-cli`

## Usage
`$ run-sql <file> [options]`

f.e.: `$ run-sql ./schema.sql --user=root --password=root --database=my_db`

### Options:

  --host [optional]        The hostname of the database you are connecting to.
  --port [optional]        The port number to connect to.
  --user <required>        The MySQL user to authenticate as.
  --password <required>    The password of that MySQL user.
  --socketPath [optional]  The path to a unix domain socket to connect to. When used host and port are ignored.
  --database <required>    Name of the database to use for this connection

  -V, --version            output the version number
  -h, --help               output usage information

## History

Version 1.0.0 (2017-10-06) - First Version launched

## License

The MIT License (MIT)

Copyright (c) 2017 Rijk van Zanten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
