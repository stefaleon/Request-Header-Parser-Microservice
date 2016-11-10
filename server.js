var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api/whoami', function(req, res) {

	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	var lang = (req.headers['accept-language'].split(','))[0];
	var sw = req.headers['user-agent'].split('(')[1].split(')')[0];

	var output = {
		"ipaddress": ip,
		"language": lang,
		"software": sw
	}
	res.send(output);
});

app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log('Server started!');
})