
const { usersModel } = require("../models/mongoose/index");
const { userModel } = require('../models/sequelize');
const attributes = ["id", "password", "last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "is_active", "date_joined"];

const { encryptPassword, comparePassword } = require("./../helpers");


module.exports.createUser = ( params ) => {
    return new Promise(async function(resolve, reject){

        try {
            let user = await usersModel.findOne({ email: params.email });
            if (user) return reject(new Error("User already registered."));

            const newUser = new usersModel( params );
            newUser.password = await encryptPassword(newUser.password);

            const userAdded = await newUser.save();
            const token = newUser.generateAuthToken();
            return resolve({user: userAdded, token})              
        } catch (error) {
            return reject(error)
        }
      

    })
};


module.exports.loginAdmin = ( email, password ) => {
    return new Promise(async function(resolve, reject){

        //find an existing user
        let user = await usersModel.findOne({ email: email, is_admin: true });
        if (!user){
            return resolve(null);
        };
        const passwordMatch = await comparePassword(password, user.password);
        if( !passwordMatch )
            return resolve( null )
        if( passwordMatch ){
            const token = user.generateAuthToken();
            return resolve({
                token: token,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.contact_email,
                is_admin: user.is_admin,
            }) 
       }
        return resolve( null );
    })
};


const BaseService = require('./H_BaseService');

class MyService extends BaseService {

    createUser(params){

    }

    loginUser(email, password){
        const scope = this;
        return new Promise(async function(resolve, reject){
    
            //find an existing user
            let user = await scope.findOne({ email: email });
            user = user.dataValues;
            if (!user){
                return resolve(null);
            };
            if (!user.is_active){
                return reject(new Error('User disabled, please contact admin.'));
            };
            const passwordMatch = await comparePassword(password, user.password);
            if( passwordMatch ){
                // const token = user.generateAuthToken();
                
                return resolve({
                    // token: token,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    is_active: user.is_active,
                    username: user.username,
                    is_organiser: false,
                    is_traveller: true,
                    id: user.id
                }) 
           }
           else {
            return reject(new Error("Password mismatch"));
           }
    
        })
    }

    loginAdmin(email, password){
        
    }

    generateUniqueUsername(first_name, last_name) {
        let proposedName = (first_name + last_name).toLowerCase;
        proposedName += Math.floor((Math.random() * 100) + 1);

        return this
          .findOne({username: proposedName})
          .then(function(user) {
            if (user) {
              return generateUniqueUsername(first_name, last_name);
            }
            return proposedName;
          })
          .catch(function(err) {
            throw err;
          });
    }

}


let myService = new MyService( userModel, { attributes } );
module.exports = myService;
