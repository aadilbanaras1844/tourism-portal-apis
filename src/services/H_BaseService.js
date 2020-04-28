

module.exports = class BaseService {

    constructor( Model, options = {} ) {
        this.model = Model;
        this.attributes = options.attributes || ['id'];
        this.include = options.include || [];
    }

    async create(params){
        let output = await this.model.create( params );
        return output;
    }

    async  get( id ){
        let output = await this.model.findOne({
            where : {id: id},
            include: this.include,
            // attributes: this.attributes
        });
        return output; 
    }
    
    async getBySlug( slug ){
        let output = await this.model.findOne({
            where : {slug: slug},
            include: this.include,
            // attributes: this.attributes
        });
        return output;
    }
            
    async findAll( params= {}, options ={} ){
        params.is_active  = true;
        let include =[]
        if( options.include )
            include = options.include;
        
        let attributes = [];
        if( options.attributes )
            attributes = options.attributes;

        let records  = await this.model.findAll({
            include: include ,
            attributes: this.attributes,
            sort: {priority:-1},
            where: params
        });
        return records;
    }
    
    async findOne( params= {}, options = {} ){
        let output = await this.model.findOne({
            where : params,
            include: this.include,
            attributes: this.attributes
        });
        return output; 
    }
    
    async findAndPaginate( params= {}, { 
        page=1,
        limit=20,
        include = this.include,
        attributes = this.attributes
    } ){
        params.is_active  = true;
        let records  = await this.model.findAndCountAll({
            include: include,
            attributes: attributes,
            distinct: true,
            where: params,
            order: [
                ['priority', 'DESC'],
                ['featured', 'ASC'],
            ],
            limit: limit,
            offset: (page-1) * limit
        });
        records.page = page;
        let {total_pages, pages} = makePages( records.count, limit );
        records.total_pages = total_pages;
        records.pages = pages;
        return records;
    }
    
    count( condition = {} ){ }

}



// helper functions

const makePages  = function(count, limit){
    var total_pages = Math.floor(count / limit) ;
    if(count % limit > 0)
    total_pages += 1;
    var tmp = [];
    for (let i = 1; i < total_pages+1; i++) {
        tmp.push( i )   
    }
    return {total_pages:total_pages, pages: tmp}
}