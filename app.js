const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end("<button class='btn btn-primary'>Home Page</button>");
            break;
        case '/about':
            res.end("About Page");
            break;
        default:
            res.end("page Not FOund!");
            break;
    }
});

server.listen(port);