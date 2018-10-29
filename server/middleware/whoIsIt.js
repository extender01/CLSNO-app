let {User} = require('../models/user');

//finds out who is logged in and appends nick and _id to request object for further use
//check if x-auth cookie comes with request:
    //if not user is directly set to nobody
    //if x-auth token is not found in db (if !found user) or is invalid (.catch), then nobody is returned
    //if everything is fine users nick and _id is appended to request object



// MISTO req.user = {nick: 'nobody', _id: ''}; DAT req = {...req, nick: nobody, _id: ''} ABY TAM NEBYL ZBYTECNY NEST, PODLE TOHO UPRAVIT V USERACTIONS

let whoIsIt = (req, res, next) => {
    let token;
    if (req.cookies['x-auth']) {
        token = req.cookies['x-auth'];

        User.findByToken(token).then((foundUser) => {
           
            if (!foundUser) {
                req.user = {nick: 'nobody', _id: ''};
            } else {
                console.log(' else matchedUser');
    
                req.user = foundUser;
                req.token = token;
            }
           
            next();
        }).catch((e) => {
            req.user = {nick: 'nobody', _id: ''};
            next();
        });


    } else {
        req.user = {nick: 'nobody', _id: ''};
        next();   
    }  
};






module.exports = {whoIsIt};