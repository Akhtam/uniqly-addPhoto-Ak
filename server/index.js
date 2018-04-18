const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Photo = require('../mongo-dbase/Photo.js');

const PORT = 3004;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist' ));


app.get('/api/foto', function(req, res) {
  Photo.find({}, (err,data) =>{
    if(err) console.log(err);
    res.send(data)
  })
});

app.listen(PORT, ()=> console.log('listening: ' + PORT));
