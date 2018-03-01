var api_key = 'key-9cd46c853dd4b8b9cd3e525dd4858aab';
var domain = 'sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Damping.in <postmaster@sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org>',
  to: 'komelvin123@gmail.com',
  subject: 'You have a new request',
  text: 'Damping.in'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
});