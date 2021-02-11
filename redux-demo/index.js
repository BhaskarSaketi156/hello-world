
const redux= require('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const reduxLogger=require('redux-logger')
const combineReducers= redux.combineReducers
//import {createStore} from 'redux'

//const applyMiddleware= redux.applyMiddleware
const logger=reduxLogger.createLogger()

const BUY_CAKE ='BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

// Action is to buy cake from cakestore

/*const initialState=
{
   numberOfCakes:10,
   numberOfIce:10

}
 function buyCake()
{
    return {
        type: BUY_CAKE 
        //type is must and we can add more 
        //info: 'buycakes'
    }
}

function buyIce()
{
    return {
        type: BUY_ICE 
        //type is must and we can add more 
        //info: 'buycakes'
    }
}

const reducer = (state = initialState, action) => {
      switch(action.type)
      {
          case BUY_CAKE : return{
                ... state,
                  numberOfCakes: state.numberOfCakes-1
              }
              case BUY_ICE : return {
                 ...state,
                  numberOfIce: state.numberOfIce-1
              }
              default: return state
      }
}
*/
//
//
const cakeState={
    numberOfCakes:10
}
const iceState={
    numberOfIce:20
}
function buyCake()
{
    return {
        type: BUY_CAKE 
        //type is must and we can add more 
        //info: 'buycakes'
    }
}

function buyIce()
{
    return {
        type: BUY_ICE 
        //type is must and we can add more 
        //info: 'buycakes'
    }
}
const cakeReducer=(state=cakeState,action)=>
{
     switch(action.type)
     {
         case BUY_CAKE:return{
            numberOfCakes:cakeState.numberOfCakes-1
         }
         default:return state
        }
}
const iceReducer=(state=iceState,action)=>
{
     switch(action.type)
     {
         case BUY_ICE:return{
            numberOfIce:iceState.numberOfIce-1
         }
         default:return state
    
        }
}
const rootReducer=combineReducers({
    cake:cakeReducer,
    ice:iceReducer}
)
const store= createStore(rootReducer,applyMiddleware(logger))  //single store
console.log('initial state',store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIce())
unsubscribe()
