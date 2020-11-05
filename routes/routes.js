/*
    On a web server, routing is matching up different requests to a server with code that runs
    in response to that request and creates some kind of response.
*/
let express = require('express');       // require the express library
let router = express.Router();          // make a router

// configure a route that is a get request (a request that fetches data)
router.get('/', function(req, res, next) {
    res.json( { 'message': 'Hello ITEC 2560 web programmers' } )
})

module.exports = router;