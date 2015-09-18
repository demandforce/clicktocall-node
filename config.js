// Define app configuration in a single location, but pull in values from
// system environment variables (so we don't check them in to source control!)
module.exports = {
    // Twilio Account SID - found on your dashboard
    accountSid: "ACffd1a2fa2f38550c9a035d2048493c4c",

    // Twilio Auth Token - found on your dashboard
    authToken: "c586f63189d09500a95b930adca42a95",

    // A Twilio number that you have purchased through the twilio.com web
    // interface or API
    twilioNumber: "+14087184386",

    // The port your web application will run on
    port: process.env.PORT || 3000
};
