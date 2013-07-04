var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var index;
fs.readFile('./index.html', function (err, data) {
    if (err) {
        throw err;
    }
    index = data;
});

app.get('/', function(request, response) {
	response.writeHeader(200, {"Content-Type": "text.html"});
	response.write(index);
	response.close();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
