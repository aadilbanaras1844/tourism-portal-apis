var express = require('express')
var router = express.Router()

const { provincesService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')

// router.use( userMiddleware.auth );


router.get('/', async function (req, res, next) {
    let params = req.query;
    params.sort = { name: 1 };
    try {
        let result = await provincesService.findAll( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.get('/listing', async function (req, res, next) {
    let params = req.query;
    params.sort = { name: 1 };
    try {
        let result = await provincesService.findAndPaginate( params );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});



    
module.exports = router;