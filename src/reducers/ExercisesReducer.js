import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.EXERCISES_UPDATED:
            return [...state, ...action.payload]
        default:
            return state
    }
}