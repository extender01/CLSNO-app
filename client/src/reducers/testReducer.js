

const testReducerDefaultState = {
    tests: [],
    loading: false,
    error: null,
    filters: {
        alphabet: '',
        category: 'all',
        text: ''
    }
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
        return { ...state,
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

    case 'LOAD_TESTS_BEGIN':
        return {...state, loading: true, error: null};
    case 'LOAD_TESTS_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'LOAD_TESTS_SUCCESS':
        return {...state, loading: false, error: null, tests: [...action.allTests] };

        
    case 'ADD_CUSTOM_NOTE_BEGIN':
        return {...state, loading: true, error: null};
    case 'ADD_CUSTOM_NOTE_FAILURE':
        return {...state, loading: false, error: action.error};
    case 'ADD_CUSTOM_NOTE_SUCCESS':
        return {
            ...state,
            tests: state.tests.map((item) => {
                //console.log('item testu z pole je: ', item);
                
                if(item._id === action._id) {
                    // console.log('problehlo add custom note v reduceru');
                    
                    return {...item, customNotes: action.customNotes};

                } else {
                    return item;
                }}),
            loading: false, error: null};


    case 'CATEGORY_FILTER':
        return {...state, filters: {...state.filters, category: action.category}};
    case 'ALPHABET_FILTER':
        return {...state, filters: {...state.filters, alphabet: action.alphabet}};
    case 'TEXT_FILTER':
        return {...state, filters: {...state.filters, text: action.text}};
    // case 'SEARCH_ALL':
    //     return {...state, filters: {...state.filters, searchAll: action.isAll}};
    case 'CLEAR_FILTERS':
        return {...state, filters: {...state.filters, category: 'all', alphabet: ''}};


    default:
        return state;
    }
};

export default testReducer;