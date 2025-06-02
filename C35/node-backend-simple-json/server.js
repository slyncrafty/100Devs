const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const PORT = 8000;


// readfile handler
// reduce repeated & verbose code
const readFile = (__filename, contentType, res ) => {
  try{
    fs.readFile(__filename, (err, data) => {
      if(contentType) res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  } catch (err) {
    console.log(err);
  }
}


const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  
  // Using switch-case instead of if-else for readability
  switch(page) {
    case '/' :
      return readFile('index.html', 'text/html', res);
    case '/otherpage':
      return readFile('otherpage.html', 'text/html', res); 
    case '/otherotherpage':
      return readFile('otherotherpage.html', 'text/html', res);
    case '/css/style.css':
      return readFile('css/style.css', 'text/css', res);
    case '/js/main.js': 
      return readFile('js/main.js', 'text/javascript', res);
    case '/api':
      if('student' in params){
        if(params['student']== 'leon'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "leon",
            status: "Boss Man",
            currentOccupation: "Baller"
          }
          res.end(JSON.stringify(objToJson));
        }//student = leon
        else if(params['student'] != 'leon'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "unknown",
            status: "unknown",
            currentOccupation: "unknown"
          }
          res.end(JSON.stringify(objToJson));
        }//student != leon
      }//student if

    default: 
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
