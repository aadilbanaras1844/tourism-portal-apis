const {
    AttractionModel,
    AttractionImageModel,
    CityModel,
    ProvinceModel,
    CountryModel
} = require("../../models/sequelize/index");
const FTExtendedService = require('./../FTExtendedService');
const attributes = ["id", "created_at", "name", "image", "slug", "priority", "featured", "areatype_id", "city_id", "country_id", "province_id"];

const model = AttractionModel;
const include = [
    {
        model: AttractionImageModel,
        attributes: ['id', 'name', 'attraction_id'],
        as: 'attraction_images'
    },
    {
        model: CityModel,
        attributes: ['id', 'name'],
        as: 'city'
    },
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

class MyService extends FTExtendedService {}


let myService = new MyService(model, {
    attributes,
    include: include
});

module.exports = myService;