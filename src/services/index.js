const userService = require('./user.service');

const {
    currenciesService,
    currencyRatesService,
    areaTypesService,
    continentsService,
    countriesService,
    provincesService,
    citiesService
} = require('./configuration');

const {
    attractionsService,
    blogsService,
    todosService,
    toursService
} = require('./accessdata');

const {
    ordersService,
    transactionsService,
    ticketsService,
    salesService
} = require('./payment')

module.exports = {

    userService,

    currenciesService,
    currencyRatesService,
    areaTypesService,
    continentsService,
    countriesService,
    provincesService,
    citiesService,


    attractionsService,
    blogsService,
    todosService,
    toursService,

    ordersService,
    transactionsService,
    ticketsService,
    salesService

}