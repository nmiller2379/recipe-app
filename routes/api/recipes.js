const express = require('express');
const router = express.Router();

// GET request
router.get('/', (req, res) => {
    Recipe.find()
        .then(recipes => res.jason(recipes))
});

module.exports = router;