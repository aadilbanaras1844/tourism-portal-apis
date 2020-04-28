
const { CurrencyRateModel } = require("../../models/sequelize/index");
const BaseService = require('./../H_BaseService');
const attributes = [ 'id', 'value', 'currency_from_id', 'currency_to_id' ];

const model = CurrencyRateModel;

class MyService extends BaseService{ }


let myService = new MyService( model, { attributes } );

module.exports = myService;
