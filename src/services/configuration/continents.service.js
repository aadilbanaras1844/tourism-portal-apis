
const { ContinentModel } = require("../../models/sequelize/index");
const BaseService = require('./../H_BaseService');
const attributes = [ 'id', 'name' ];

const model = ContinentModel;

class MyService extends BaseService{ }


let myService = new MyService( model, { attributes } );

module.exports = myService;
