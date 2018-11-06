

const testReducerDefaultState = {
    tests: [],
    loading: false,
    error: null
};



const testReducer = (state = testReducerDefaultState, action) => {
    switch (action.type) {
    case "ADD_TEST_BEGIN":
        return {...state, loading: true, error: null};
    case "ADD_TEST_FAILURE":
        return {...state, loading: false, error: action.error};
    case "ADD_TEST_SUCCESS":
        return {...state, loading: false, error: null,  tests: [...state.tests, action.addedTest]};

    case 'EDIT_TEST_BEGIN':
        return {...state, loading: true, error: null};
    case 'EDIT_TEST_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'EDIT_TEST_SUCCESS':
        return {
            ...state
            // UPDATOVAT REDUX STATE POMOCI NOVYCH DAT CO SE VRATI ZPATKY Z AXIOS PATCH, ABY SE ZMENY PROJEVILY HNED
        };

    case "LOAD_TESTS_BEGIN":
        return {...state, loading: true, error: null};
    case "LOAD_TESTS_FAILURE":
        return {...state, loading: false, error: action.error};
    case "LOAD_TESTS_SUCCESS":
        return {...state, loading: false, error: null, tests: [...action.allTests] };

        
    case "AHOJ":
        return state;
    default:
        return state;
    }
};

export default testReducer;