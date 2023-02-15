const http = require('http')
const server = http.createServer((req, response) => {
    if(req.url==='/node')
    {
        response.write('<html>');
        response.write('<body>');
        response.write('<h1>Welcome to my node js project</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }

    if(req.url==='/home'){
        response.write('<html>');
        response.write('<body>');
        response.write('<h1>Welcome home</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }
    if(req.url==='/about'){
        response.write('<html>');
        response.write('<body>');
        response.write('<h1>Welcome to About Us page</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }
    // setTimeout(() => {
    //     console.log('Exiting...')
    //     process.exit();
    // }, 3000)
})

server.listen(4000);

