class Email {
    static send_email(from_user,title,email_to,message,location){
        var api_key = 'key-9cd46c853dd4b8b9cd3e525dd4858aab';
        var domain = 'sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        var data = {
        from: 'Damping.in <postmaster@sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org>',
        to: `${email_to}`,
        subject: `${title}`,
        text: `${from_user} has made a request to you to attend an event at ${location}:   ${message}`
        };
        mailgun.messages().send(data, function (error, body) {
        console.log(body);
        });
    }
    static send_email_accepted(partner,email_to){
        var api_key = 'key-9cd46c853dd4b8b9cd3e525dd4858aab';
        var domain = 'sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        var data = {
        from: 'Damping.in <postmaster@sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org>',
        to: `${email_to}`,
        subject: `Request accepted`,
        text: `${partner} has accepted your request!`
        };
        mailgun.messages().send(data, function (error, body) {
        console.log(body);
        });
    }
    static send_email_rejected(partner,email_to){
        var api_key = 'key-9cd46c853dd4b8b9cd3e525dd4858aab';
        var domain = 'sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        var data = {
        from: 'Damping.in <postmaster@sandboxc22ff63d8bff40e5a395e649df8bc370.mailgun.org>',
        to: `${email_to}`,
        subject: `Partner has rejected your request`,
        text: `${partner} has rejected your request!`
        };
        mailgun.messages().send(data, function (error, body) {
        console.log(body);
        });
    }
}

module.exports = Email;
