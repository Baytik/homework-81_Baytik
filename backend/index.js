const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const link = require('./app/links');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect('mongodb://localhost/links', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    app.use('/links', link);
    app.listen(port)
};

run().catch(e => {
    console.error(e)
});