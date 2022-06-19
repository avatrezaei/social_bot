const http = require('http');
const https = require('https');
const axios = require('axios').create({
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),
});
const { tweet } = require('./tweet');
const {telegram} = require('./telegram');



module.exports.quotes = () => {
     var config = {
          method: 'get',
          url: 'https://type.fit/api/quotes',
          headers: { }
        };
     axios(config)
          .then(response => {
               
               const quotes = response.data;
               let rand = Math.floor(Math.random() * quotes?.length);

               const message = `${quotes[rand].text} \n\n #quote #bot`;

               console.log(message);
               
               //send to twitter
               tweet(message);

               //send to telegram
               telegram(message);

          }).catch(error => {
               console.log(error);
          });
     }