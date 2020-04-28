var express = require('express')
var router = express.Router()

const { countriesService, tour } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')

// router.use( userMiddleware.auth );

// get Countrues
router.get('/', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await countriesService.findAll({}, {})
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

// get Destination Countrues
router.get('/destination-countries', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await countriesService.getDestinationCountriess({})
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

// get Tourist Countrues
router.get('/tourist-countries', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await countriesService.getTouristCountries({})
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

    
module.exports = router;