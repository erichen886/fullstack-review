const axios = require('axios');
const config = require('../config.js');
// console.log (axios)

let getReposByUsername = (userName) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

   return axios(options)
  //   .then (function(response) {
  //     console.log('from here', response.data[0])
  //     callback(response.data);
  //   })
  //   .catch(function(error) {
  //     console.log error.response.data
  //   })

}

// getReposByUsername('erichen886');

module.exports.getReposByUsername = getReposByUsername;

