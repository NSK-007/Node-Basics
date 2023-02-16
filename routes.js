const fs = require('fs');

const requestHandler = (req, response) => {
    response.setHeader('Content-Type', 'text/html');
    if(req.url==='/')
    {
        let readData = fs.readFileSync('message.txt', 'utf8')
        console.log(readData)
        response.write('<html>');
        response.write('<body>');
        response.write(`<div>${readData}</div>`)
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
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        })
    }
}

module.exports = requestHandler;

module.exports = {
    handler : requestHandler,
    text : 'Some text'
}

module.exports.handler = requestHandler;
module.exports.text = 'Some Text';

exports.handler = requestHandler;
