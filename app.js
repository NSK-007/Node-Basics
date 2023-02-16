const http = require('http')
const fs = require('fs');
const server = http.createServer((req, response) => {
    response.setHeader('Content-Type', 'text/html');
    if(req.url==='/')
    {
        response.write('<html>');
        response.write('<body>');
        response.write('<form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="Submit"></form>');
        response.write('</body>');
        response.write('</html>');
        return response.end();
    }

    if(req.url==='/message' && req.method==='POST'){
        fs.writeFileSync('message.txt', 'DUMMY 3');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
})

server.listen(4000);

