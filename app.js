let express = require('express')
let app = express();
let index = require('./routes/index');
let bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use('/',index);
app.listen(3000, ()=>{
  console.log('Server is running...');
})