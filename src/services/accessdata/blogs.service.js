const {
    BlogModel,
    BlogSectionModel
} = require("../../models/sequelize/index");
const FTExtendedService = require('./../FTExtendedService');
const attributes = ["id", "created_at", "updated_at", "title", "slug", "content", "status", "featured", "author_id", "image"];

const model = BlogModel;
const include = [{
    model: BlogSectionModel,
    attributes: ['id', 'description', 'blog_id'],
    as: 'blog_sections'
}];

class MyService extends FTExtendedService {}


let myService = new MyService(model, {
    attributes,
    include: include
});

module.exports = myService;