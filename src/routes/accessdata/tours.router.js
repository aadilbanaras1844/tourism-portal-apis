var express = require('express')
var router = express.Router()

const { toursService, ordersService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')
const limit = 16;

// router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await toursService.findAll( {} );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/listing', async function (req, res, next) {
    let params = req.query;
    try {
        let result = await toursService.findAndPaginate( params, 
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
        let result = await toursService.featued( 8 );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/top', async function (req, res, next) {
    try {
        let result = await toursService.top( 8 );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/:slug', async function (req, res, next) {
    let slug = req.params.slug;
    try {
        let result= await toursService.getBySlug( slug );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.post('/order', async function (req, res) {
    let { tour_id, tour_package_id } = req.body;
    
    try {
        let order = await ordersService.createOrder(tour_id, tour_package_id );
        return res.json(order)
    } catch (error) {
        
    }


    
});

    
module.exports = router;