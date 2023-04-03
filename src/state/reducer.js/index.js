import {combineReducers} from 'redux'
import alert from './alertReducer'
import auth from "./authReducer"
import profile from "./profileReducer"
import name from "./testReducer"
import  post from "./postReducer"
const  reducers = combineReducers({
     alert,
     auth,
     profile,
     name,
     post: post
})

export default reducers;