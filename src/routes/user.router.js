
var express = require('express')
var router = express.Router()
const { ApiResponse } = require('./../helpers');
const { ResponseMessages } = require('./../config')

let { userService } = require("./../services")

const { userMiddleware } = require('./middlewares');

router.post('/register', async function (req, res) {
    let params = req.body;
    try {
        const output = await userService.createUser( params );
        return res.status(200).json({status: true, output: {stauts: true, _id: output._id}})    
    } catch (error) {
        return res.status(500).json( {status: false, error: error.message} )
    }
    
});

router.post('/login', async function (req, res, next) {
    const {email, password} = req.body;
    try {
        let user = await userService.loginUser(email, password);
        if( !user ){
            return ApiResponse(res, 400, false, ResponseMessages.invalidLoginCredentials, {} )
        }
        return ApiResponse(res, 200, true, ResponseMessages.loginSuccess, user )
    } catch (error) {
        return next(error)
    }
});

router.get('/profile', userMiddleware.auth, function (req, res) {
    return res.json({status: 'profile',user: req.user})
});

module.exports = router