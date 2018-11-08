import testReducer from '../../reducers/testReducer';
import {labmets, newLabmet } from '../fixtures/labmets';

const currentState = {
    tests: labmets,
    loading: false,
    error: null
};



test('should setup default test values', () => {
    const state = testReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        tests: [],
        error: null,
        loading: false
    });
});



test('should ADD TEST BEGIN', () => {
    const state = testReducer(undefined, {
        type: 'ADD_TEST_BEGIN',
        loading: true,
        error: null
    });
    expect(state).toEqual({
        tests: [],
        loading: true,
        error: null
    });
});



test('should add new test to existing array', () => {
    const action = {
        type: 'ADD_TEST_SUCCESS',
        addedTest: {...newLabmet}
    };
    
    
    const state =  testReducer(currentState, action);
    expect(state).toEqual({
        tests: [...currentState.tests, newLabmet],
        loading: false,
        error: null
    });
});

test('should fail when axios request to add test to db fails', () => {
    const action = {
        type: 'ADD_TEST_FAILURE',
        error: 'something went wrong',
        loading: false
    };
    const state = testReducer(currentState, action);
    expect(state).toEqual({
        tests: [...currentState.tests],
        loading: false,
        error: action.error
    });
});

