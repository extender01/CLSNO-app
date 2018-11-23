import axios from 'axios';

//=======================  ADD_TEST===================================================

const addTestBegin = () => ({type: 'ADD_TEST_BEGIN'});
const addTestFailure = (error = null) => ({type: 'ADD_TEST_FAILURE', error: error});
const addTestSuccess = (test = {}) => {
    
    return {
        type: 'ADD_TEST_SUCCESS',
        addedTest: test
    };
};

/* normally dispatch function is called with object, when it is called with function as an argument
it is sensed by redux thunk which executes that function and appends dispatch function as an argument,
so we can dispatch action with plain object in this startAddTest function (appart from dispatch it can
also append getstate as second argument) */

/* SCHEME:  on form submit LabMetForm component calls method from AddTestPage (with args from form)via props...
..this method calls startAddTest (imported) but it calls it as argument via dispatch ...
..this activates redux thunk which invokes that method and via it, final dispatch of action object is executed */

                            
export const startAddTest = (test) => {
    return (dispatch) => {
        console.log('startAddTest started, now dispatching addTestBegin, test object is: ', test);
        dispatch(addTestBegin());
        //this will get data from result of axios POST call (what is saved to mongodb) and is used to update redux via dispatch
        console.log('starting axios POST request to send new test to db');
        
        axios({
            method: 'post',
            url: '/api/addtest',
            data: test
        }).then((result) => {
            // console.log('res z axios', result);
                          
            dispatch(addTestSuccess(result.data));
            console.log('successfully added to db and dispatched object with data from db to be saved to redux store');

        }).catch((e) => {
            console.log('something went wrong when saving data to db', e);
            //error from axios request is sent action object, then reducer saves error to store and component displays error via mapStateToProps
            dispatch(addTestFailure(e));
        });
    };
};

//=====================================EDIT TEST========================================================================================

const editTestBegin = () => ({type: 'EDIT_TEST_BEGIN'});
const editTestFailure = (error = null) => ({type: 'EDIT_TEST_FAILURE', error: error});
const editTestSuccess = ( id = '', updates = {}) => {
    
    return {
        type: 'EDIT_TEST_SUCCESS',
        updates,
        id
    };
};

                            
export const startEditTest = (id, updates) => {
    return (dispatch) => {
        console.log('updates are: ', updates);
        dispatch(editTestBegin());
        //this will get data from result of axios POST call (what is saved to mongodb) and is used to update redux via dispatch
        console.log('starting axios POST request to send new test to db');
        
        axios({
            method: 'patch',
            url: '/api/tests/' + id,
            data: updates
        }).then((result) => {
            console.log('incoming updates', updates);

            console.log('res z axios', result);
                          
            dispatch(editTestSuccess(id, result.data));
            console.log('successfully added to db and dispatched object with data from db to be saved to redux store');

        }).catch((e) => {
            console.log('something went wrong when saving data to db', e);
            //error from axios request is sent action object, then reducer saves error to store and component displays error via mapStateToProps
            dispatch(editTestFailure(e));
        });
    };
};


//==================================SHOW ALL TESTS===================================================================================

const loadTestsBegin = () => ({type: 'LOAD_TESTS_BEGIN'});
const loadTestFailure = (error = null) => ({type: 'LOAD_TESTS_FAILURE', error: error});
const loadTestsSuccess = (tests = []) => {
    return {
        type: 'LOAD_TESTS_SUCCESS',
        allTests: tests
    };
};

export const startLoadTests = () => {
    return (dispatch) => {
    
        dispatch(loadTestsBegin());
        axios.get('/api/get-all').then((result) => {
          
            console.log('uspesne nacteny testy', result.data);
            dispatch(loadTestsSuccess(result.data));
    
        }).catch((e) => {
            console.log('error pri loadovani testu');
            dispatch(loadTestFailure(e));
            
            
        });
    };
};


//===============  ADD / EDIT CUSTOM NOTE =============================================

const addCustomNoteBegin = () => ({type: 'ADD_CUSTOM_NOTE_BEGIN'});
const addCustomNoteFailure = (error) => ({type: 'ADD_CUSTOM_NOTE_FAILURE', error});
const addCustomNoteSuccess = (_id, customNotes) => {
    return {
        type: 'ADD_CUSTOM_NOTE_SUCCESS',
        _id,
        customNotes
    };
};

export const startAddCustomNote = (passedNote, passedId) => {
    return (dispatch) => {
       
        dispatch(addCustomNoteBegin());
        axios.post('/api/customNote/' + passedId, passedNote).then((result) => {
            console.log('result axiosu je:', result);
            dispatch(addCustomNoteSuccess(result.data._id, result.data.customNotes));
        });
    };
};

//NEAKTUALIZUJE CUTSTOM NOTE PO DISPATCH ADDCUSTOMNOTESUCCES, SPRAVIT


           
            
        
    
