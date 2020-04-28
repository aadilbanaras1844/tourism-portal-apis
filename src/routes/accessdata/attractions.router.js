var express = require('express')
var router = express.Router()

const { attractionsService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')
const limit = 16;

// router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await attractionsService.findAll( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/listing', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await attractionsService.findAndPaginate( params, 
            {
                page:params.page,
                limit: limit
            }
        );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/featured', async function (req, res, next) {
    try {
        var limit = 8;
        if( req.query.limit )
            limit = parseInt( req.query.limit )
        let result = await attractionsService.featued( limit );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/top', async function (req, res, next) {
    try {
        let result = await attractionsService.top( 8 );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/:slug', async function (req, res, next) {
    let slug = req.params.slug;
    try {
        let result= await attractionsService.getBySlug( slug );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});


    
module.exports = router;