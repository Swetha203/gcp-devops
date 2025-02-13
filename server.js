const express = require('express');
const app = express();
const port = 4000 || process.env.PORT;

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Hello, World!');
 });

app.get('/book', (req, res) => {
    res.status(200).send({ message:"You want a book?" });
})

 app.listen(port);