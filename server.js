const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("I'm listening!!");


});

console.log('Nesma3 fik 3al 3000');
app.listen(3000);
