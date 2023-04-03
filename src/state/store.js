// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from 'redux-thunk'
// import reducers from './reducer.js/index.js'

// const middleware = [thunk];

//  const store = createStore(reducers,
//                            {},
//                            composeWithDevTools(applyMiddleware(...middleware))
//                         );

//  export default store;

 import { createStore, applyMiddleware, compose } from 'redux';
 import reducers from './reducer.js/index.js'
 import thunk from 'redux-thunk'
 const middleware = [thunk];

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, {},composeEnhancers(
     applyMiddleware(...middleware)
   ));

   export default store;