const http = require("http");
const server = http.createServer((req, res) => {

    if (req.url === "/") {
      res.writeHead(200 , {"content-type" : "text/plain"})  
      res.end(" hello for server")
    }
});

server.listen(5000, () => {

    console.log("server is running port 500" );
    
});
