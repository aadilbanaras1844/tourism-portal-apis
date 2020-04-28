

const attractionsRouter = require('./attractions.router');
const blogsRouter = require('./blogs.router');
const todosRouter = require('./todos.router');
const toursRouter = require('./tours.router');



module.exports = function(app){
    app.use('/api/attractions', attractionsRouter);
    app.use('/api/blogs', blogsRouter);
    app.use('/api/todos', todosRouter);
    app.use('/api/tours', toursRouter);
}