import { combineReducers } from 'redux'

import recipeReducer from './recipe/recipeReducer'

export default combineReducers({
    recipe: recipeReducer
})