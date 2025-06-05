const express = require('express')
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())

const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb://localhost:27017/';
const dbName = 'star-wars-quotes';

PORT = 3000;


// CRUD
// Read
// Update
// Delete

MongoClient.connect(connectionString).then(client => {
    console.log(`Connected to MongoDB: ${connectionString}`);
    const db = client.db(dbName);
    const quotesCollection = db.collection('quotes');

    // urlencoded method to extract data from the <form> element and add to body in the request object.
    app.use(express.urlencoded({ extended: true }));

    // CRUD - Read 
    // 1. Get quotes from MongoDB
    // 2. Render the quotes in HTML with a template engine
    app.get('/', (req, res) => {
        // const cursor = db.collection('quotes').find()
        db.collection('quotes')
            .find()
            .toArray()
            .then(results => {
                // console.log(results);      // Debugging
                res.render('index.ejs', { quotes: results }) 
            })
            .catch(error => console.error(error))
    })

    // CRUD - Create
    app.post('/quotes', (req, res) => {
        quotesCollection
            .insertOne(req.body)
            .then(result => {
                res.redirect('/')  // redirect to '/' 
            })
            .catch(error => console.error(error))
    })
  
    // CRUD - Update
    app.put('/quotes', (req, res) => {
        quotesCollection
            .findOneAndUpdate(
                { name: "Yoda"}, 
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote,
                    },
                }, 
                {
                    upsert: true, // upsert: insert a document if no documents can be found
                }
            )
            .then(result => {
                // console.log(result)      // Debugging
                res.json('Success')
            })
            .catch (error => console.error(error));
        console.log(req.body)
    })
    

    app.delete('/quotes', (req, res) => {
        quotesCollection
            .deleteOne({ name: req.body.name })
            .then(result => {
                if ( result.deletedCount === 0) {
                    return res.json('No quote to delete')
                } else{
                    res.json(`Deleted Darth Vader's quote`)
                }
            })
            .catch (error => console.error(error));
    })

    app.listen(PORT, function() {
        console.log(`listening on ${PORT}`);
    })

}).catch(error => console.error(error));


