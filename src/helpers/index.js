
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const crypto = require('crypto');

// <algorithm>		pbkdf2_sha256
// <iterations>	150000
// <salt>			MSpfDHPpII6X
// <hash>			
// xGDH1bjxPlMje9SP9lW1yJIx/D909SMz0b3iAp+FJ/I=
// 721babfd854a7e884a74417665eae28a3708c763c888

crypto.pbkdf2('aadil123', 'MSpfDHPpII6X', 150000, 22, 'SHA256', (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
  });


module.exports = {
    
    encryptPassword: function(password) {
        return new Promise(function(resolve, reject){
            bcrypt.hash(password, saltRounds, function(err, hash) {
                if(err)
                    return reject(err)
                return resolve(hash);
            });
        })
        
    },
    comparePassword: function(password, hash){
        return new Promise(function(resolve, reject){
            return resolve(true)
            bcrypt.compare(password, hash, function(err, res) {
                if(err)
                    return reject(err)
                return resolve(res)
            });
        })       
    },
    ApiResponse: function(res, statusCode, status, msg, data){
        return res.status( statusCode ).json({status: status, message: msg, data: data})
    },
    generateRandomImageName: function( ) {
        var _sym = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var str = '';
    
        for(var i = 0; i < 40; i++) {
            str += _sym[parseInt(Math.random() * (_sym.length))];
        }
        return str+'.png';
    },
    stringArrToUri: function(arr){
        try {
            let tmpStr = arr.join(' ');
            tmpStr = tmpStr.split(/\s+/).join(' ');
            return tmpStr.split(' ').join('-');            
        } catch (error) {
            console.log('err ', error)
            return ''
        }

    }
}