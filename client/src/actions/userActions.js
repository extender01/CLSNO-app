import axios from 'axios';

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
              
          }).catch((e) => {
              console.log('neco se pokazilo,', e);
              dispatch(loginFailure(e))
          });
    }
};


//==================LOGGED USER==========================================================

//checks in db who is owner of x-auth cookie and sends back nick and id info (and stores them to redux)
const loggedUserBegin = () => ({type: "LOGGED_USER_BEGIN"});
const loggedUserFailure = (error = null) => ({type: 'LOGGED_USER_FAILURE', error: error});
export const loggedUserSuccess = (user = {}) => {
    if (user) {
        return {
            type: 'LOGGED_USER_SUCCESS',
            user: {
                _id: user._id,
                nick: user.nick
            },
            isLogged: user._id ? true : false
            
        }
    } 
};





export const startLoggedUser = () => {
    return (dispatch) => {
        dispatch(loggedUserBegin());


        //checks if client has cookie with token, if yes then that user is returned as result of GET request, if not only string that says nobody is logged is returned
        axios.get('/api/me').then((result) => {
            console.log('kdo je zalogovan',result.data);
            if (result.data._id) {
                dispatch(loggedUserSuccess(result.data));
            } else {
                console.log('bude proveden prazdny dispatch');
                
                dispatch(loggedUserSuccess());

            }
            
            
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



//============================SIGNUP==========================================================

const signupBegin = () => ({type: 'SIGNUP_BEGIN'});
const signupFailure = (error = null) => ({type: 'SIGNUP_FAILURE', error: error});
const signupSuccess = (user = {}) => {
    return {
        type: 'SIGNUP_SUCCESS'
        
    }
}
