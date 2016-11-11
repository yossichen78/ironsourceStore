# A simple node/express/angular/leveldb app

Install:

$ git clone ...

$ npm install

$ node server.js

Open http://localhost:3000/ (or edit server.js for custom port)

In order for the app to send emails - 

Edit "mailer.js" and enter valid smtp credentials at:

var smtpAddress = 'example@gmail.com';
var smtpPass = 'password';

# Notes:

For production I would add tests of course, do better error handling,
but most importantly further abstract the api - remove business logic from router.js (db and mailer access).