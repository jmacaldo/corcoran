const db = require('../db') //this is required
const President = require('../db/models/president');

const router = require('express').Router()

//This is the default GET request that's fired on page load. Data is ordered as it appears in the database
router.get('/', function(req, res, next) {
    President.findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

//Same request as above, but data is ordered by ASC order of presiden's name
router.get('/az', function(req, res, next) {
    President.findAll({
       order: [['president', 'ASC']]
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

//Again, same as above, but in DESC order this time.
router.get('/za', function(req, res, next) {
    President.findAll({
      order: [['president', 'DESC']]
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});


module.exports = router
