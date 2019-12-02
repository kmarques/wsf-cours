const https = require('https');
const fs = require('fs');

const url = "https://www.freeletics.com/api/user/v3/password/registration";

const config = {
  method: 'POST',
  headers: {
     "content-type": "application/json"
,'authority': 'www.freeletics.com'
,'accept': 'application/json'
,'origin': 'https://www.freeletics.com'
,'content-type': 'application/json;charset=UTF-8'
,'sec-fetch-site': 'same-origin'
,'sec-fetch-mode': 'cors'
,'referer': 'https://www.freeletics.com/fr/auth/registration/'
,'cookie': 'country_code=FR; _conv_r=s%3Awww.google.com*m%3Aorganic*t%3A*c%3A; _ga=GA1.2.1312259870.1574667628; _fbp=fb.1.1574667628094.424127727; afUserId=c83bf52a-4580-41d1-9e49-69f25def5365-p; G_ENABLED_IDPS=google; ab.storage.userId.8c0e4491-27a7-4961-8528-889e9375135d=%7B%22g%22%3A%223319858%22%2C%22c%22%3A1574667639808%2C%22l%22%3A1574667639808%7D; ab.storage.deviceId.8c0e4491-27a7-4961-8528-889e9375135d=%7B%22g%22%3A%22ddb67a10-9334-1dd9-62a7-da58e1e79620%22%2C%22c%22%3A1574667639812%2C%22l%22%3A1574667639812%7D; _gid=GA1.2.1612174858.1575160475; ab.storage.sessionId.8c0e4491-27a7-4961-8528-889e9375135d=%7B%22g%22%3A%226c198ee4-2234-5226-5332-e63a169f88cf%22%2C%22e%22%3A1575162275208%2C%22c%22%3A1575160475116%2C%22l%22%3A1575160475208%7D; _conv_v=vi%3A1*sc%3A2*cs%3A1575160470*fs%3A1574667627*pv%3A5*exp%3A%7B%7D*ps%3A1574667627; _conv_s=si%3A2*sh%3A1575160470110-0.5305294685348256*pv%3A2; CID_UUID=bd47ab92-ebc3-42e2-a225-a12c3a8c77bb; gtm_t=onboard>other>loggedincontent>training>onboard>other>nutrition>training>other>homepage>other>register; cookie_consent=true'
  }
};
const postData = {
  user: {
       application_source: "training",
email: "test@test.com",
emails_allowed: true,
first_name: "test",
gender: "u",
last_name: "test",
locale: "fr",
password: "1234",
platform_source: "web",
terms_acceptance: true
  }
}

const req = https.request(url, config, function(res) {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  
  let data ='';
  res.on('data', function (d) {
    data += d;
  });

  res.on('end', function() {
console.log(data);
    let result = JSON.parse(data);
  });
});

req.write(JSON.stringify(postData));
req.end();
