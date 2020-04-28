var express = require('express')
var router = express.Router()


const { ordersService, transactionsService, ticketsService, salesService } = require("../../services");
const { userMiddleware } = require('../middlewares');

const { ApiResponse } = require('../../helpers');
const { ResponseMessages } = require('../../config')

router.use( userMiddleware.auth );


router.get('/:order_id', async function (req, res, next) {
    let order_id = req.params.order_id;
    try {
        let result = await ordersService.get( order_id );
        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, result )
    } catch (error) {
        return next(error)
    }
});

router.post('/:order_id/pay', async function (req, res, next) {
    console.log('dddddddd')
    let order_id = req.params.order_id;
    let reqParams = req.body;
    console.log('req.user => ', req.user)
    let cardSale, transaction, sale, ticket ;
    try {
        let cardSale = await ordersService.createSale( order_id, reqParams );
        
        
        // generate transaction 
        // generate sale
        // generate ticket

        console.log('out ', sale);

        return ApiResponse(res, 200, true, ResponseMessages.dataFetched, ticket )        
    } catch (error) {
        // console.log('jjjjjjjj ', error)
        return next(error)
    }
});





    
module.exports = router;