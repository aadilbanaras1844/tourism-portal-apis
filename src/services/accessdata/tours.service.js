const {
    TourModel,
    TourImageModel,
    TourPackageModel,
    CurrencyModel,
    CityModel,
    ProvinceModel,
    CountryModel
} = require("../../models/sequelize/index");
const FTExtendedService = require('./../FTExtendedService');
const attributes = ["id", "is_active", "created_at", "title", "priority", "slug", "description", "image", "featured", "areatype_id", "attraction_id", "city_id", "country_id", "currency_id"];

const model = TourModel;
const include = [{
        model: TourImageModel,
        attributes: ['id', 'name', 'tour_id'],
        as: 'tour_images'
    },{
        model: TourPackageModel,
        attributes: ['id', 'title', 'cost', 'description'],
        as: 'tour_packages'
    },{
        model: CurrencyModel,
        attributes: ['id', 'name', 'code', 'short_name'],
        as: 'currency'
    },
    {
        model: CityModel,
        attributes: ['id', 'name'],
        as: 'city'
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