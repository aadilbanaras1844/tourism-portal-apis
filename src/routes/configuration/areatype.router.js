var express = require('express')
var router = express.Router()

const { areaTypesService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')

// router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await areaTypesService.findAll( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});


    
module.exports = router;