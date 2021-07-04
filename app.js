var request = require('request');


while(1){
    request('https://www.google.com/', function (error, response) {
        if (error) 
        console.log('fail')
        else
        console.log('pass')
      });
}

// import request from 'request';
// request('https://www.google.com/', function (error, response) {
//     if (error) 
//     console.log('fail')
//     else
//     console.log('pass')
//   });


