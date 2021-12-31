const express = require('express');
const app = express();
const port = 8080;
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})