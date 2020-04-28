var express = require('express')
var router = express.Router()

const { blogsService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')

// router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await blogsService.findAll( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/featured', async function (req, res, next) {
    try {
        let result = await blogsService.featued( 8 );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/top', async function (req, res, next) {
    try {
        let result = await blogsService.top( 8 );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

    
module.exports = router;