const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended : true}));

app.listen(PORT, function() {
    console.log('Listening on port:', PORT); 
});