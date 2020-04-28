var express = require('express')
var router = express.Router()

const { citiesService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')
const limit = 16;

const populate = [{ column: 'country_id' , field: ['name'] }];
const paramsNeeded = { name: 1, image: 1, country_id: 1, link_url: 1, icon: 1 }

// router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    let params = req.query;
    params.sort = { name: 1 };
    try {
        let result = await citiesService.findAll( params, {populate, paramsNeeded} );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/listing', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await citiesService.findAndPaginate( params, 
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

router.get('/top', async function (req, res, next) {
    try {
        let result = await citiesService.top( 6 );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/featured', async function (req, res, next) {
    try {
        let result = await citiesService.featued( 8 );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/:slug', async function (req, res, next) {
    let slug = req.params.slug;
    try {
        let result= await citiesService.getBySlug( slug );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});


module.exports = router;