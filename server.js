// This is going to start the web server

let express = require('express');
let routes = require('./routes/routes');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')));

app.use('/api', routes);

// start the server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port);
})