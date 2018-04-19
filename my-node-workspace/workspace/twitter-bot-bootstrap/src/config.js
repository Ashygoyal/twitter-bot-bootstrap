/** TWITTER APP CONFIGURATION
 * consumer_key
 * consumer_secret
 * access_token
 * access_token_secret
 */

// Uncomment for when deploying to Heroku

 module.exports = {
   consumer_key: process.env.CONSUMER_KEY,
   consumer_secret: process.env.CONSUMER_SECRET,
   access_token: process.env.ACCESS_TOKEN,
   access_token_secret: process.env.ACCESS_TOKEN_SECRET,
 };

require('dotenv').config(); 

module.exports = {
  consumer_key: 'xxxxxxxxx',
  consumer_secret: 'xxxxxxxxx',
  access_token: 'xxxxxxxxx',
  access_token_secret: 'xxxxxxxxx'
}

// Add your custom tokens in place of xxxxxxxxx


