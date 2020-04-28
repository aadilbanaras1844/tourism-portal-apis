
const { sequelize, Model, DataTypes } = require('./../../config/db.postgres');

// configuration folder models
const CurrencyModel = require('./configuration/tb_currency')(sequelize, DataTypes);
const CurrencyRateModel = require('./configuration/tb_currency_rate')(sequelize, DataTypes);
const AreaTypeModel = require('./configuration/tb_area_type')(sequelize, DataTypes);
const ContinentModel = require('./configuration/tb_continent')(sequelize, DataTypes);
const CountryModel = require('./configuration/tb_country')(sequelize, DataTypes);
const DestinationCountryModel = require('./configuration/tb_destination_country')(sequelize, DataTypes);
const TouristCountryModel = require('./configuration/tb_tourist_country')(sequelize, DataTypes);
const ProvinceModel = require('./configuration/tb_province')(sequelize, DataTypes);
const CityModel = require('./configuration/tb_city')(sequelize, DataTypes);

// accessdata folder models
const AttractionModel = require('./accessdata/tb_attraction')(sequelize, DataTypes);
const AttractionImageModel = require('./accessdata/tb_attraction_image')(sequelize, DataTypes);
const BlogModel = require('./accessdata/tb_blog')(sequelize, DataTypes);
const BlogSectionModel = require('./accessdata/tb_blog_sections')(sequelize, DataTypes);
const TodoModel = require('./accessdata/tb_todo')(sequelize, DataTypes);
const TodoImageModel = require('./accessdata/tb_todo_image')(sequelize, DataTypes);
const TourModel = require('./accessdata/tb_tour')(sequelize, DataTypes);
const TourImageModel = require('./accessdata/tb_tour_image')(sequelize, DataTypes);
const TourPackageModel = require('./accessdata/tb_tour_package')(sequelize, DataTypes);

// payment folder models

const OrderModel = require('./payment/tb_orders')(sequelize, DataTypes);
const TransactionModel = require('./payment/tb_transactions')(sequelize, DataTypes);
const TicketModel = require('./payment/tb_tickets')(sequelize, DataTypes);
const SaleModel = require('./payment/tb_sales')(sequelize, DataTypes);

const userModel = require('./auth/auth_user')(sequelize, DataTypes);


module.exports = {

    // auth, user models
    userModel,

    // configuration folder models
    CurrencyModel,
    CurrencyRateModel,
    AreaTypeModel,
    ContinentModel,
    CountryModel,
    DestinationCountryModel,
    TouristCountryModel,
    ProvinceModel,
    CityModel,
    
    // accessdata folder models
    AttractionModel,
    AttractionImageModel,
    BlogModel,
    BlogSectionModel,
    TodoModel,
    TodoImageModel,
    TourModel,
    TourImageModel,
    TourPackageModel,

    // payment folder models
    OrderModel,
    TransactionModel,
    TicketModel,
    SaleModel
}

DestinationCountryModel.belongsTo(CountryModel, {foreignKey : 'country_id'} );
TouristCountryModel.belongsTo(CountryModel, {foreignKey : 'country_id'});


BlogModel.hasMany( BlogSectionModel, {foreignKey: 'blog_id', as: 'blog_sections'});

AttractionModel.hasMany( AttractionImageModel, {foreignKey: 'attraction_id', as: 'attraction_images'});
AttractionModel.belongsTo( CityModel, {foreignKey: 'city_id', as: 'city'} );
AttractionModel.belongsTo( ProvinceModel, {foreignKey: 'province_id', as: 'province'} );
AttractionModel.belongsTo( CountryModel, {foreignKey: 'country_id', as: 'country'} )

TodoModel.hasMany( TodoImageModel, {foreignKey: 'todo_id', as: 'todo_images'});
TodoModel.belongsTo( CityModel, {foreignKey: 'city_id', as: 'city'} );
TodoModel.belongsTo( ProvinceModel, {foreignKey: 'province_id', as: 'province'} );
TodoModel.belongsTo( CountryModel, {foreignKey: 'country_id', as: 'country'} )


TourModel.hasMany( TourImageModel, {foreignKey: 'tour_id', as: 'tour_images'});
TourModel.hasMany( TourPackageModel, {foreignKey: 'tour_id', as: 'tour_packages'});
TourModel.belongsTo( CurrencyModel, { foreignKey: 'currency_id', as: 'currency' } )
TourModel.belongsTo( CityModel, {foreignKey: 'city_id', as: 'city'} );
TourModel.belongsTo( CountryModel, {foreignKey: 'country_id', as: 'country'} )

CityModel.belongsTo( ProvinceModel, {foreignKey: 'province_id', as: 'province'} );
CityModel.belongsTo( CountryModel, {foreignKey: 'country_id', as: 'country'} )
