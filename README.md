# Backend Apis for Basic Tourism Portal
Architecture of the project
* Programming Language used: NodeJS 12.14.1
* Database used: Postgres, MongoDB
* Database Library used : Sequelize, mongoose
## Features includes
* Managing Countries, Destination Countries, Tourist Countries, Area Types, Cities, Currencies, Currency Rates, Provinces/States, 
* Managing Attractions/ Tourists spots with images, Blogs, Things todo in a place, Tours

## Project Structure
 * 2 types of models are added , for postgres & for mongodb, i mainly used postgres models
 * services which will be dealing with models to add, delete, update , view data and other database operations
 * routes: routes will have api endpoints which will be calling services to perform operations
 * config folder contains all keys, parameters loading etc
 

## Api Details
 * Most apis in this repository have usually fetch records, listing with paginations, top records, 
 * Update, Delete, Add aren't added because for CMS operations i developed another code which is completely separate which has all CMS operations to view, add, update, delete, activate, deactivate stuff. this repository is only for showing that all in real website and some real time operations like purchasing tickets etc.
