const initialState = {
    count: 100
}

const myReducer = (state = initialState, action) => {
    const newState = { ...state }
console.log(`action ${action.type}- ${action.value}`)
    switch (action.type) {
        case 'ADD':
            newState.count += action.value;
            break;
        case 'SUB':
            newState.count -= action.value;
            break;
    }
console.log('>>>',newState.count)
    return newState
}



export default myReducer;



