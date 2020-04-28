
const { AreaTypeModel } = require("../../models/sequelize/index");

const BaseService = require('./../H_BaseService');
const attributes = [ 'id', 'name', 'slug' ]

const model = AreaTypeModel;

class MyService extends BaseService{ }


let myService = new MyService( model, { attributes } );

module.exports = myService;
