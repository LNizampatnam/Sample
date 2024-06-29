const express = require('express');
const app     = express();

// serve static files from public directory
// -------------------------------------------
app.get('/', function(req,res){
    res.send('Hello World!')
});


// start server
// -----------------------
app.listen(3001, function(){
    console.log('Running on port 3001!')
})
