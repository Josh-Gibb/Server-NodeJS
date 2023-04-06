//Core Node modules
const http = require("http");
const fs = require("fs");
const path = require("path");
const fsPromise = require("fs").promises;


const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  filePath = path.join(__dirname, "public", req.url);
  fs.readFile(filePath, function(error, data){
    if(error){
      res.writeHead(404);
      res.write("Error: File not found " + error.message);
    } else{
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
 