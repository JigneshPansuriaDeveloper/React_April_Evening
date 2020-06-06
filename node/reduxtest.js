const {createStore} = require('redux');
const initialState={
    age:20
}

function myReducer(state=initialState,action){

    const newState={...state};

    if(action.type == 'ADD'){
        newState.age+=1
    // console.log('state change',JSON.stringify(newState))  
    }
    if(action.type == 'SUB'){
        newState.age-=1
    // console.log('state change',JSON.stringify(newState))  
    }
 return newState;
}

const store =createStore(myReducer);

store.subscribe(()=>{
    console.log('state changes',JSON.stringify(store.getState()))
})

store.dispatch({type:'ADD'})
store.dispatch({type:'ADD'})
store.dispatch({type:'ADD'})
store.dispatch({type:'ADD'});
store.dispatch({type:'SUB'})



