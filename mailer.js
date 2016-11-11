
var nodemailer = require('nodemailer');
var smtpAddress = 'example@gmail.com';
var smtpPass = 'password';
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://'+smtpAddress+':'+smtpPass+'@smtp.gmail.com');

module.exports = {
	sendMail: function(purchase, callback){
		console.log(purchase)
		var mailOptions = {
		    from: '"IronThrone Steam Irons" <ironthronestore@gmail.com>', // sender address
		    to: purchase.email, // list of receivers
		    subject: 'Thank you for your purchase from IronThrone!', // Subject line
		    text: 'Dear '+purchase.firstname+', Your product is on its way!', // plaintext body
		    html: '<b>Dear '+purchase.firstname+', Your product is on its way!</b>' // html body
		};
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		    	console.log(error);
		        callback(false);
		    }
		    console.log('Message sent: ' + info.response);
		    callback(true);
		});
	}
}
