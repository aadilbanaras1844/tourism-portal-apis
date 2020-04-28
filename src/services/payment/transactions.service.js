
const { TransactionModel } = require("../../models/sequelize/index");
const BaseService = require('./../H_BaseService');


const attributes = [ 'id' ];

const model = TransactionModel;


class MyService extends BaseService{

    

}


let myService = new MyService( model, { attributes } );
module.exports = myService;
