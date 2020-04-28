
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require("../../config/load-parameters");
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const UserSchema = new Schema({
    first_name: { type: String, required: "What is Your First Name?" },
    last_name: { type: String, required: "What is Your Last Name?" },
    contact_number1: { type: String },
    contact_number2: { type: String },
    email: { type: String, required: "What is Your Email?", unique: true },
    password: {
        type: String,
        required: 'What is your password',
        // minlength: 8,
        // maxlength: 10,
    },
    image_dp: { type: String },
    images: { type: [String] },
    
    is_traveller: { type: Boolean, default: true },
    is_organiser: { type: Boolean, default: false },
    is_manager: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    is_super_admin: { type: Boolean, default: false },
    
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, default: new Date },
    updated_at: { type: Date, default: new Date }
});

//custom method to generate authToken 
UserSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign( {
        _id: this._id,
        first_name: this.first_name,
        last_name: this.last_name,
        
        is_active: this.is_active,
    
        is_super_admin: this.is_super_admin,
        is_admin: this.is_admin,
        is_manager: this.is_manager,
        is_organiser: this.is_organiser,
        is_traveller: this.is_traveller,

    }, config.jwtKey,
    { expiresIn: '1h' } );
    return token;
}


module.exports.usersModel = mongoose.model('Users', UserSchema);