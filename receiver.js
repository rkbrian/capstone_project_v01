const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://54.160.152.220/api/v1/prods')
  .then(function (response) {
    // handle success
    console.log(response.data.data.data[0].id);
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('http://54.160.152.220/api/v1/prods');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
