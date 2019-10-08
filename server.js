const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;
const middleware = require("./middleware");
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Expressss server started on port ' + PORT + '!');
});