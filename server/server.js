require('./config/config');
const path = require('path');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const {mongoose} = require('./db/mongoose'); //must stay
const {User} = require('./models/user');
const {Test} = require('./models/test');
const {authenticate} = require('./middleware/authenticate');
const {whoIsIt} = require('./middleware/whoIsIt');

const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'public')
const port = process.env.PORT;

const corsOptions = {exposedHeaders: 'x-auth'};
app.use(express.static(publicPath));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());


//==========================================================================





//==================I AM ALIVE============================================
app.get('/api/alive', whoIsIt, (req,res) => {
 

    res.send(req.user);
});







//=================GET ALL TESTS=========================================

app.get('/api/get-all', (req, res) => {
   
    Test.find({}).then((foundTests) => {
        console.log('testy nalezeny');
        
        
        
        res.send(foundTests);
    });
});


// ========== ADD TEST=============================================================

app.post('/api/addtest', authenticate, (req, res) => {
   
    console.log('pridani testu pred spustenim save');
     
    let test = new Test(req.body);         //creates new mongoose model
    test.save().then((savedTest) => {
        console.log(savedTest);
        res.send(savedTest);
    }).catch((e) => {res.status(400).send(e);});
});

// =================ADD CUSTOM NOTE ========================================







//==============EDIT TEST
app.patch('/api/tests/:id', (req, res) => {
    let id = req.params.id;
    let updates = _.pick(req.body, ['name', 'where']);

    Test.findByIdAndUpdate(id, {$set: updates}, {new: true}).then((updatedTest) => {
        if (!updatedTest) {
            return res.status(404).send();
        }
        res.send(updatedTest);
    }).catch((e) => {
        res.status(400).send(e);
    });
});


// ============ SIGN UP=================================
app.post('/api/adduser', (req, res) => {
    let extractedProps = _.pick(req.body, ['nick', 'password']);
    let user = new User(extractedProps);

    user.save().then((savedUser) => {
        return user.generateAuthToken();
    }).then((retreivedToken) => {
        res.cookie('x-auth', retreivedToken).send(user);
        //res.header('x-auth', retreivedToken).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});


//=============== LOGIN=============================================
app.post('/api/login', (req, res) => {
    let extractedProps = _.pick(req.body, ['nick', 'password']);

    User.findByCredentials(extractedProps.nick, extractedProps.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            console.log('token', token);
            // res.header('x-auth', token).send(user);
            res.cookie('x-auth', token).send(user);
        }).catch((e) => {
            res.status(400).send(e);
        });
    }).catch((e) => {
        res.status(400).send(e);
    });
});



//===========================WHOISLOGGED======================================

app.get('/api/me', whoIsIt, (req, res) => {

    
    res.send({user: req.user});
   
});




//=================== LOGOUT
//req.user.removeToken and req.token are accessible cause of authenticate middleware which appends them to req object
app.delete('/api/logout', authenticate, (req, res) => {
    console.log('pokus o smazani');
    console.log(req.token);
    
    // res.send('ahoj');
    req.user.removeToken(req.token).then(() => {
        console.log('povedla se fce removeToken');
        
        
        res.status(200).clearCookie('x-auth').send('uspesne odhlasen')
        res.status(200).send('uspesne odhlasen')
    }).catch((e) => {
        console.log('pokus o smazani na severu se nepovedl');
        
        res.status(400).send(e);
    });
});


//========================================= CLIENT RENDERING =========================

// app.get ('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });











app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};