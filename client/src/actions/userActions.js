import axios from 'axios';
import { history } from '../routers/AppRouter';


const url = 'http://127.0.0.1:3000';


//========================LOGIN==========================================================

const loginBegin = () => ({type: "LOGIN_BEGIN"});
const loginFailure = (error = null) => ({type: "LOGIN_FAILURE", error: error});
const loginSuccess = (user = {}) => {
    return {
        type: "LOGIN_SUCCESS",
        user: {
            _id: user._id,
            nick: user.nick
        }
    };
};

export const startLogin = (credentials) => {

    return (dispatch) => {
        dispatch(loginBegin());
       
        axios({
            method: 'post',
            url: '/api/login',
            data: {
              nick: credentials.nick,
              password: credentials.password
            }}
          ).then((result) => {
            
              
             dispatch(loginSuccess(result.data));
             history.push('/help');
              
          }).catch((e) => {
              console.log('neco se pokazilo,', e);
              dispatch(loginFailure(e))
          });
    }
};


//========================SIGNUP=======================================================

const signupBegin = () => ({type: "SIGNUP_BEGIN"});
const signupFailure = (error = null) => ({type: "SIGNUP_FAILURE", error: error});
const signupSuccess = (user = {}) => {
    return {
        type: "SIGNUP_SUCCESS",
        user: {
            _id: user._id,
            nick: user.nick
        }
    };
};

export const startSignup = (credentials) => {

    return (dispatch) => {
        dispatch(signupBegin());
       
        axios({
            method: 'post',
            url: '/api/adduser',
            data: {
              nick: credentials.nick,
              password: credentials.password
            }}
          ).then((result) => {
            
              
             dispatch(signupSuccess(result.data));
              
          }).catch((e) => {
              console.log('neco se pokazilo,', e);
              dispatch(signupFailure(e))
          });
    }
};


//==================WHO IS LOGGED USER==========================================================

//checks in db who is owner of x-auth cookie and sends back nick and id info (and stores them to redux)
const loggedUserBegin = () => ({type: "LOGGED_USER_BEGIN"});
const loggedUserFailure = (error = null) => ({type: 'LOGGED_USER_FAILURE', error: error});
export const loggedUserSuccess = (sourceAPI = {user: {_id: '', nick: nobody}}) => {
    if (sourceAPI) {
        return {
            type: 'LOGGED_USER_SUCCESS',
            user: {
                _id: sourceAPI.user._id,
                nick: sourceAPI.user.nick
            },
            isLogged: sourceAPI.user._id ? true : false
            
        }
    } 
};





export const startLoggedUser = () => {
    return (dispatch) => {
        dispatch(loggedUserBegin());


        //checks if client has cookie with token, if yes then that user is returned as result of GET request, if not only string that says nobody is logged is returned
        axios.get('/api/me').then((result) => {
           
            dispatch(loggedUserSuccess(result.data))
            
            
        });
       
            
        
    };
};





//============================LOGOUT======================================================
const logoutBegin = () => ({type: "LOGOUT_BEGIN"});
const logoutFailure = (error) => ({type: "LOGOUT_FAILURE", error: error});
const logoutSuccess = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    };
};

export const startLogout = () => {
    return (dispatch) => {
        dispatch(logoutBegin());
        console.log('zacina logout');
        
        axios.delete('/api/logout')
        .then(() => {
            console.log('uspesne smazano');
            dispatch(logoutSuccess())
            
        }).catch((e) => {
            console.log('error z catch actions', e);
            
            dispatch(logoutFailure(e))
        });
    }
};




