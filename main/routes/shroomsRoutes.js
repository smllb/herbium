const express = require('express')
const shroomsRouter = express.Router()
const getHealthIndicatorController = require('../../controllers/shrooms/getHealthIndicatorController.js')


shroomsRouter.get('/', (req, res) => {
    return res.send(getHealthIndicatorController.getHealthIndicator())

});

module.exports = shroomsRouter
