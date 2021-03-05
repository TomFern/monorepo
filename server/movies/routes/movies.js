var express = require('express');
var router = express.Router();

/* GET favorites movies listing. */
router.get('/', function(req, res, next) {
    res.json({
            "title": "favmovies",
            "description": "Your Favorite Movies",
            "movies": [
            { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
            { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
            { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
            { "id": "4", "title": "Inception", "releaseYear": "2010" },
            { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
            ]        
        }
    );
});

module.exports = router;
