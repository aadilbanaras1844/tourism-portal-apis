

const ordersRouter = require('./orders.router');



module.exports = function(app){
    app.use('/api/orders', ordersRouter);
}