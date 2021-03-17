import {reducer, StateType, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";

test('collapsed should be "true"', () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED} )

    //expect result
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be "false"', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED} )

    //expect result
    expect(newState.collapsed).toBe(false)
})

test('bad action data will return error', () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    expect(() => {
        reducer(state, {type: 'bad action'}
        )}).toThrowError()

})


export default {}