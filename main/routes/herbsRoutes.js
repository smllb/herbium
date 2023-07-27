const express = require('express')
const searchHerbByNameView = require('../../views/herbs/searchHerbByNameView.js')
const retrieveHerbsByBenefitsController = require('../../controllers/herbs/retrieveHerbsByBenefitsController.js')
const herbsRouter = express.Router()

herbsRouter.get('/', (req, res) => {
    res.send('Sup')
});

herbsRouter.get('/name', (req, res) => {

    searchHerbByNameView.searchHerbByName(req, res)
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal server error');
        });
});

herbsRouter.get('/benefits', (req, res) => {
    retrieveHerbsByBenefitsController.retrieveHerbsByBenefits(req, res)
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal server error');
        });
});

module.exports = herbsRouter
