const express = require('express');
const http = require('https');
const fs = require('fs');
// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/$DOMAIN/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/$DOMAIN/fullchain.pem')
// };
const app = express();
app.use((req, res) =>
{
    res.end('Hello World');
});

http.createServer(app).listen(3000, 'localhost');