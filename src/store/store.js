
import { combineReducers, compose, legacy_createStore as createStore } from "redux"

import { toyRedcuer } from "./redcuers/toy.reducer"


const rootReducer = combineReducers({
    toyMoudle: toyRedcuer,
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store





