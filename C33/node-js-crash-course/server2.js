import { createServer } from 'http';
import fs from 'fs/promises';

const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); //moving on to next
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler fo GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    if(user) {
        res.write(JSON.stringify( user ));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify( {message: 'User not found' } ));
    }
    res.end();
}


// Route Handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';
    // Listen for data
    req.on('data', (chunk) => { 
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201; //successful and something was created
        res.write(JSON.stringify( newUser ));
        res.end();
    })
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404; 
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end(); 
}


// Logger Middleware to append log to an external file 
const loggerMiddleware = (req, res, next) => {
    const logText = `\n${req.method} ${req.url}`;
    appendFile('./test.txt', logText);
    next();
}

// appendFile()
const appendFile = async (fileName, text) => {
    try{
        await fs.appendFile(fileName, text);
        console.log(`Log: ${text} appended to ${fileName}`);
    } catch (error) {
        console.log(error);
    }
}



const server = createServer((req, res) => { 
    loggerMiddleware(req, res, () => {
        jsonMiddleware(req, res, () => {
            if( req.url === '/api/users' && req.method === 'GET' ) {
                getUsersHandler(req, res);
            } else if ( req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET' ) {
                getUserByIdHandler(req, res);
            } else if ( req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        })
    });
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


