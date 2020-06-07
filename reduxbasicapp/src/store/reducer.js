const initialState = {
    count: 100,
    history:[]
}

const myReducer = (state = initialState, action) => {
    const newState = { ...state }
//console.log(`action ${action.type}- ${action.value}`)
    switch (action.type) {
        case 'ADD':
           // newState.count += action.value;
            //break;
            return{
                ...state,
                count:state.count+action.value,
                history:state.history.concat({id:Math.random(),count:state.count+action.value})
            }
            break;
        case 'SUB':
            return{
                ...state,
                count:state.count-action.value,
                history:state.history.concat({id:Math.random(),count:state.count-action.value})
            }
            break;
    }
console.log('>>>',newState)
    return newState
}



export default myReducer;



