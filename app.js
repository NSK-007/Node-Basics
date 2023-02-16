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
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
})

server.listen(4000);

