const request = require('request');
 

//добавим песню


/*const json = {
    "name": "........",
    "artist": "......",
    "album": ".......",
}; */
 
request.delete({
    url: 'http://localhost:3002/songs/63',
  //  body: json,
   // json: true,
}, function (error, response, body) {
    console.log(body);
}); 

// запустить этот файл за счет выполнения команды node post.js в новом окне консоли,
// не останавливая сервер, и в результате получим тот же результат, как и при использовании cURL. 