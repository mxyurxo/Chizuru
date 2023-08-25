const MusicBot = require("./structures/Client");
const client = new MusicBot();

client.connect()

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});


module.exports = client;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Mr.Fickling | 247 Service Started')
});

app.listen(3000, () => {
  console.log('Mr.Fickling | 247 Service Started');
});