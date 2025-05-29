import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// Get Current Path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // console.log(req.url);
    // console.log(req.method);
    
    try {    
        // check if GET request
        if (req.method === 'GET') {
            let filePath;
            if(req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Page Not Found');
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Server Error');
    }
    




});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})