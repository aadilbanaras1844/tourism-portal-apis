
const { OrderModel } = require("../../models/sequelize/index");
const BaseService = require('./../H_BaseService');
var Twocheckout = require('2checkout-node');
const config = require("./../../../src/config/load-parameters");
const twoCheckout = config.twoCheckout;

const toursService = require("../../services/accessdata/tours.service");

const attributes = [ 'id' ];

const model = OrderModel;

var tco = new Twocheckout({
    sellerId: twoCheckout.sellerId,
    privateKey: twoCheckout.privateKey,
    // secretWord: twoCheckout.secretWord,
    // secretKey: twoCheckout.secretKey,
    sandbox: false ,
    // demo:true,
});


class MyService extends BaseService{

    async createOrder( tour_id, tour_package_id ){
        
        try {
            const tour = await toursService.get( tour_id );

            const { 
                id,
                title,
                is_active,
                tour_packages,
                currency 
            } = tour;

            let selectedPackage = tour_packages.filter(obj => {return  obj.id == tour_package_id })
            // title, tour_id, tour_package_id, user_id, cost, currency, status
            if( selectedPackage.length <1 )
                return null;
            selectedPackage = selectedPackage[0];
            if( is_active == false )
                return null;
            let addParams = {
                title : title,
                tour_id: id,
                tour_package_id: selectedPackage.id,
                user_id: 1,
                cost: selectedPackage.cost,
                currency: currency.code.toUpperCase(),
                status: 0,
                is_active : true
            };
            let order = await this.create(addParams);
            return order;
        
        } catch (error) {
            return error;
        }

    }

    createSale( order_id, reqParams ){
        return new Promise(function(resolve, reject){
            return  resolve(
                {
                    "type": "AuthResponse",
                    "transactionId": "205182114564",
                    "billingAddr": {
                        "addrLine1": "123 Test St",
                        "addrLine2": null,
                        "city": "Columbus",
                        "zipCode": "43123",
                        "phoneNumber": "5555555555",
                        "phoneExtension": null,
                        "email": "example@2co.com",
                        "name": "Testing Tester",
                        "state": "Ohio",
                        "country": "USA"
                    },
                    "merchantOrderId": "123",
                    "orderNumber": "205182114555",
                    "recurrentInstallmentId": null,
                    "responseMsg": "Successfully authorized the provided credit card",
                    "responseCode": "APPROVED",
                    "total": "19.97",
                    "currencyCode": "USD",
                    "errors": null
                }
            )
        });
        let scope = this;
        return new  Promise(async  function(resolve, reject){
            try {
                let orderDetails = await scope.get( order_id );
                
                
                var params = {
                    "merchantOrderId": '29119158',//orderDetails.id,
                    "token": reqParams.token,
                    "currency": 'USD', //orderDetails.currency,
                    "total": 1000.10, //orderDetails.cost,
                    "billingAddr": reqParams.billingAddr,
                    // "demo": true

                };
                
                tco.checkout.authorize(params, function (error, data) {
                    if (error) {
                        console.log(error.message);
                        return reject(error);
                    } else {
                        console.log(JSON.stringify(data));
                        return  resolve(JSON.stringify(data))
                    }
                });

            } catch (error) {
                console.log('GGGGG')
                return reject(error)
            }
        })
        
    }

}


let myService = new MyService( model, { attributes } );
module.exports = myService;
