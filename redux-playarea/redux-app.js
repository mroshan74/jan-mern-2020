// task resource - Create Read Update Destroy

const { createStore, combineReducers } = require('redux')

const taskInitialState = []

//are pure function
const tasksReducer = (state = taskInitialState, action) =>{
    switch(action.type) {
        case 'ADD_TASK' : {
            return state.concat(action.payload)
        }
        case 'REMOVE_TASK' : {
            return state.filter(task => task.id!==action.payload)
        }
        default : {
            return [].concat(state)
            //return [...state]
        } 
    }
}// should always return a default value for reducer

const customersReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_CUSTOMER' : {
            return state.concat(action.payload)
        }
        case 'REMOVE_CUSTOMER' : {
            return state.filter(customer => customer.id !== action.payload)
        }
        default: {
            return [...state]
        }
    }
}

const configureStore = () =>{
    const store = createStore(combineReducers({
        tasks: tasksReducer,
        customers: customersReducer
    }))
    return store
}

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

// action generators || action creators
addTask = (task) => {
   return { type: 'ADD_TASK' , payload: task} 
}

removeTask = (id) => {
    return { type: 'REMOVE_TASK' , payload: id}
}

addCustomer = (customer) => {
    return { type: 'ADD_CUSTOMER' , payload: customer}
}

removeCustomer = (id) => {
    return { type: 'REMOVE_CUSTOMER' , payload: id}
}

console.log(store.getState())

store.dispatch(addTask({ id: 1, title: "Task 1" }))
store.dispatch(addTask({ id: 2, title: "Task 2" }))

store.dispatch(addCustomer({ id: 1, name: 'john', email: 'john@gmail.com' }))

store.dispatch(removeTask(1))
store.dispatch(removeCustomer(1))

// for read and listing there is no action generators

// list tasks
console.log('Listing Tasks', store.getState().tasks)

// show tasks
console.log('show task - id 2',store.getState().tasks.find(task => task.id == 2))