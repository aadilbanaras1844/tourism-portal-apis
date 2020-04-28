
const jwt = require("jsonwebtoken");
const config = require("../../config/load-parameters");

module.exports.auth = function(req, res, next){

    const token = req.headers["x-access-token"] || req.headers["authorization"];
    if (!token)
        return res.send({
            message: "Access denied. No token provided.",
            status: false
        });
    try {
        const decoded = jwt.verify(token, config.jwtKey);
        req.user = decoded;
        next();
        } catch (ex) {
        return res.status(400).send({
            message: "Invalid token.Access denied. No token provided.",
            status: false
        })
    }
    
}

// module.exports.verifyHotelAccess = async function(req, res, next){
//     var hotel_id = req.params.id;
//     if(!hotel_id){
//       return res.status(401).send({
//         message: "Access denied. Don't have  access to this hotel.",
//         status: false
//       });
//     }
//     let hotel = await hotelModel.findById( hotel_id )
//     if( req.user && hotel && hotel.created_by == req.user._id)
//       next();
//     else
//       return res.status(401).send({
//         message: "Access denied. Don't have  access to this hotel.",
//         status: false
//     });
// }

