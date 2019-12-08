var express = require('express');

module.exports = function() {
	const app = express();

	app.get(
			'/',
			(req, res) => {
					return res.send('Hello world.');
			});

	app.listen(
			3000,
			() => {
					console.log('Example app listening on port 3000!');
			});
}

