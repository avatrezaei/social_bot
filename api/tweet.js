const twitter  = require('twitter');
const dotenv = require('dotenv');

dotenv.config();


const client = new twitter({
     consumer_key: process.env.TWITTER_CONSUMER_KEY,
     consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
     access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
     access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.tweet = (message) => {
     client.post('statuses/update', { status: message }, (error, tweet, response) => {
          if (error) {
               console.log(error);
          }
     });
}