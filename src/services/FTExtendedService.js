const BaseService = require('./H_BaseService');

module.exports = class FTExtendedService extends BaseService {

    async featued( limit = 8 ) {
        let records = await this.model.findAll({
            attributes: this.attributes,
            where: {
                featured: true
            },
            include: this.include,
            limit: limit
        });
        return records;
    }
    async top( limit = 8 ) {
        let records = await this.model.findAll({
            attributes: this.attributes,
            where: {
                featured: true
            },
            include: this.include,
            limit: limit
        });
        return records;
    }
}
