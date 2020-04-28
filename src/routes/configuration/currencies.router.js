var express = require('express')
var router = express.Router()

const { currenciesService, currencyRatesService } = require("./../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')

// router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    try {
        let result = await currenciesService.findAll( {} );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});
router.get('/rates', async function (req, res, next) {
    try {
        let result = await currencyRatesService.findAll( {} );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

    
module.exports = router;