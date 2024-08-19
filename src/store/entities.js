import { combineReducers } from '@reduxjs/toolkit'
import bugsReducer from './bugs'
import projectReducer from './projects'
import userReducer from './users'

export default combineReducers({
    bugs: bugsReducer,
    users: userReducer,
    projects: projectReducer
})