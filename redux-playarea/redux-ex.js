// npm init -y
// npm install redux

const { createStore , combineReducers } = require('redux')

//js function 
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1
    }
    case "INCREMENT_BY": {
      return state + action.payload
    }
    case "DECREMENT":{
        return state - 1
    }
    case "RESET":{
        return state = 0
    }
    case "SET_TO":{
        return state = action.payload
    }
    default: {
      return state
    }
  }
}

const studentReducer = (state =[] , action) => {
    switch ( action.type ){
        case "PUSH":{
            return state.concat(action.payload)
        }
        default:{
            return state
        }
    }
}

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        student: studentReducer
    }))
    return store
}

const store = configureStore()
//console.log(store)

console.log(store.getState())

store.subscribe(() => {  // gets called every -  time the state is updated
  console.log(store.getState())
})

// action creator / generator
const increment = () => {
  return { type: "INCREMENT" }
}

const incrementBy = n => {
  return { type: "INCREMENT_BY", payload: n }
}

const decrement = () => {
    return { type: "DECREMENT"}
}

const reset = () => {
    return { type: "RESET"}
}

const setTo = (n) => {
    return { type: "SET_TO", payload: n}
}

const push = (ele) => {
    return { type: "PUSH", payload: ele }
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(incrementBy(5))

store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(setTo(5))

store.dispatch(push('roshan'))
store.dispatch(push("muhammed"))
store.dispatch(push("azim"))
store.dispatch(push("anshib"))
