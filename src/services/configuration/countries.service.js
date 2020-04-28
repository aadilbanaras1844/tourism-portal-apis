const {
    CountryModel,
    DestinationCountryModel,
    TouristCountryModel,
    ContinentModel
} = require("../../models/sequelize/index");

const BaseService = require('./../H_BaseService');

const model = CountryModel;

const dCountriesService = new BaseService(DestinationCountryModel);
const tCountriesService = new BaseService(TouristCountryModel);
const attributes = ['id', 'name', 'short_name', 'slug', 'country_code', 'continent_id', 'flag', 'currency_id']

class MyService extends BaseService {

    async getTouristCountries() {
        let records = await tCountriesService.findAll({}, {
            include: [{
                model: CountryModel,
                attributes: attributes
            }]
        });
        return records.map(obj => obj.tb_country)
    }

    async getDestinationCountriess() {
        let records = await dCountriesService.findAll({}, {
            include: [{
                model: CountryModel,
                attributes: attributes
            }]
        });
        return records.map(obj => obj.tb_country)
    }

}


let myService = new MyService(model, {attributes});

module.exports = myService;