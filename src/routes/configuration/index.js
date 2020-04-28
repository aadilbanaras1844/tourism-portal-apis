const countriesRouter = require('./countries.router');
const provincesRouter = require('./provinces.router');
const areaTypesRouter = require('./areatype.router');
const currenciesRouter = require('./currencies.router');

const citiesRouter = require('./cities.router');


module.exports = function(app){
    
    // config-data apis
    app.use('/api/countries', countriesRouter);
    app.use('/api/provinces', provincesRouter);
    app.use('/api/cities', citiesRouter);
    app.use('/api/area-types', areaTypesRouter);
    app.use('/api/currencies', currenciesRouter);    
}