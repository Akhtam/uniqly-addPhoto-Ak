const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3004;

app.use(express.static(__dirname + '/../client/dist' ));


app.listen(PORT, ()=> console.log('listening: ' + PORT));
