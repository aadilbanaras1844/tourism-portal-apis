const {
    TodoModel,
    TodoImageModel,
    CityModel,
    ProvinceModel,
    CountryModel
} = require("../../models/sequelize/index");
const FTExtendedService = require('./../FTExtendedService');
const attributes = ["id", "created_at", "title", "description", "image", "slug", "priority", "featured", "areatype_id", "attraction_id", "city_id", "country_id", "province_id"];

const model = TodoModel;
const include = [
    {
        model: TodoImageModel,
        attributes: ['id', 'name', 'todo_id'],
        as: 'todo_images'
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