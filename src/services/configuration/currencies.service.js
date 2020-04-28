
const { CurrencyModel } = require("../../models/sequelize/index");
const BaseService = require('./../H_BaseService');
const attributes = [ 'id', 'name', 'short_name', 'code' ];

const model = CurrencyModel;

class MyService extends BaseService{ }


let myService = new MyService( model, { attributes } );

module.exports = myService;
