const express = require('express');
const app     = express();
const port = process.env.port || 3001;

// serve static files from public directory
// -------------------------------------------
app.get('/', function(req,res){
    res.send('Hello World!')
});


// start server
// -----------------------
app.listen(port, function(){
    console.log('Running on port `${port}`!')
})
