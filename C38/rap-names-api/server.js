const express = require('express');
const app = express();
const PORT = 8000;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const rappers = {
    '21 savage': {
        'age': 32,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper': {
        'age': 32,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois',
    },
    'young thug': {
        'age': 33,
        'birthName': 'Jeffery Lamar Williams II',
        'birthLocation': 'Atlanta, Georgia',
    },
    'unknown': {
        'age': 'Unknown',
        'birthName': 'Unknown',
        'birthLocation': 'Unknown, Unknown',
    },
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rapperName = request.params.rapperName.toLowerCase();
    console.log(rapperName)
    if(rappers[rapperName]) {
        response.json(rappers[rapperName]);
    } else {
        response.json(rappers['unknown']);
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on Port: ${PORT}`)
})
