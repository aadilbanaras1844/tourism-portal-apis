
const userRouter = require('./user.router');

const configurationRoutes = require('./configuration');
const accessDataRoutes = require('./accessdata/index');
const paymentRoutes = require('./payment');

module.exports = function(app){
    

    configurationRoutes(app);
    accessDataRoutes(app);
    paymentRoutes(app);

    app.use('/api/user', userRouter);
    
    // Error 404 Catch
    // app.use(function(req, res, next) {
    //     return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
    // });
}

