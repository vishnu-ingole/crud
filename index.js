const express= require('express');
const path = require('path')
const app= express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const router = require('./routes/route');
app.use('/api/v1',router)

var ext = path.parse(`${__filename}`);
console.log(ext);

app.listen(3000,()=>{
         console.log(`port listen on 3000`);
         
})
process.exit();