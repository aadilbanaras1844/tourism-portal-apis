

const currenciesService = require('./currencies.service');
const currencyRatesService = require('./currency_rates.service');
const areaTypesService = require('./area_types.service');

const continentsService = require('./continents.service');
const countriesService = require('./countries.service');
const provincesService = require('./provinces.service');
const citiesService = require('./cities.service');


module.exports = {
    currenciesService,
    currencyRatesService,
    areaTypesService,

    continentsService,
    countriesService,
    provincesService,
    citiesService
}