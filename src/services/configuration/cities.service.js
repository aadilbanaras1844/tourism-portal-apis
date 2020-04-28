
const { 
    CityModel,
    ProvinceModel,
    CountryModel
} = require("../../models/sequelize/index");
const FTExtendedService = require('./../FTExtendedService');
const attributes = [ 'id', 'name', 'short_name', 'description', 'slug', 'country_id', 'province_id', 'image','featured', 'priority' ];

const model = CityModel;
const include = [
    {
        model: ProvinceModel,
        attributes: ['id', 'name'],
        as: 'province'
    },
    {
        model: CountryModel,
        attributes: ['id', 'name'],
        as: 'country'
    }
];
class MyService extends FTExtendedService{ }

let myService = new MyService(model, {
    attributes: attributes,
    include: include
});

module.exports = myService;
