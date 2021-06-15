const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/recipes')

const app = express();

// DB config
const db = require('./config/keys').mongoURI

// connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connected ...'))
    .catch(err => console.log(err));

    // Use routes
    app.use('/api/recipes', items);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server listening on port ${port}`));