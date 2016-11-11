var levelup = require('levelup'),
	db = levelup('./purchasesDB', { valueEncoding: 'json' }),
    mailer = require("./mailer.js");

exports.index = function(req, res){
	console.log("index")
  res.sendFile('/public/index.html', { root: __dirname });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.sendFile('/public/partials/'+name, { root: __dirname });
};

exports.purchase = function (req, res) {
	var data = req.body;
	var timestamp = new Date().getTime();
 	db.put(timestamp, data, function (err) {
  		if (err) {
  			console.log("router.purchase error: ",err)
  			res.send('ERROR');
  		}
  		else res.send('OK');
  	});
};

exports.getPurchaes = function(req,res){
	console.log("get purchases")
	var purchases = []
	var rs = db.createReadStream()
	rs.on('error', function (err) { 
		console.log("router.getPurchaes error: ",err);
		res.send("ERROR");
	})
	rs.on('data' , function (data) { /* data.key & data.value */
		purchases.push(data)
 	})
	rs.on('close', function () { /* stream finished */ 
		res.send(purchases);
	})
}

exports.sendMail = function(req, res){
	var email = req.body.value;
	mailer.sendMail(email, function(response){
		if (response){
			res.send("OK")
		} else {
			res.send("Error sending email");
		}
	});
}