const axios = require('axios');
const {tweet} = require('./tweet');
const {telegram} = require('./telegram');

module.exports.jokes = () => {
     axios.get('https://v2.jokeapi.dev/joke/Programming?type=single')
          .then(response => {
               const joke = response.data.joke;
               const message = `${joke} \n\n #joke #bot`;
              
               //send to twitter
               tweet(message);
               //send to telegram
               telegram(message);

          }).catch(error => {
               console.log(error);
          });
}
