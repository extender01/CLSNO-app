

const testReducerDefaultState = {
    tests: [],
    loading: false,
    error: null
};



const testReducer = (state = testReducerDefaultState, action) => {
    switch (action.type) {
    case 'ADD_TEST_BEGIN':
        return {...state, loading: true, error: null};
    case 'ADD_TEST_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'ADD_TEST_SUCCESS':
        return {...state, loading: false, error: null,  tests: [...state.tests, action.addedTest]};

    case 'EDIT_TEST_BEGIN':
        return {...state, loading: true, error: null};
    case 'EDIT_TEST_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'EDIT_TEST_SUCCESS':
        return { 
            tests: state.tests.map((item) => {
                if(item._id === action.id) {
                    return {...item, ...action.updates};
                } else {
                    return item;
                }}),
            loading: false,
            error: null,
        };
    
        // return {
        //     ...state
        //     // UPDATOVAT REDUX STATE POMOCI NOVYCH DAT CO SE VRATI ZPATKY Z AXIOS PATCH, ABY SE ZMENY PROJEVILY HNED
        // };

    case "LOAD_TESTS_BEGIN":
        return {...state, loading: true, error: null};
    case "LOAD_TESTS_FAILURE":
        return {...state, loading: false, error: action.error};
    case "LOAD_TESTS_SUCCESS":
        return {...state, loading: false, error: null, tests: [...action.allTests] };

        
    case 'ADD_CUSTOM_NOTE_BEGIN':
        return {...state, loading: true, error: null};
    case 'ADD_CUSTOM_NOTE_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'ADD_CUSTOM_NOTE_SUCCESS':
        return {...state, loading: false, error: null};
    default:
        return state;
    }
};

export default testReducer;