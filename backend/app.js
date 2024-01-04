const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var insta_alertRouter=require('./routes/insta_alert/insta_alert.router')
require('dotenv').config();

const app = express();
const port = process.env.PORT 
console.log("port",port)

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.use('/',insta_alertRouter)



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {

  console.log(`Server running on port ${port}`);
});
