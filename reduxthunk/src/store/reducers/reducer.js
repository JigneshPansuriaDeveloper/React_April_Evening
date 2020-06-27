const intialState = {
    age: 20
}


const reducer = (state = intialState, action) => {

    const newState = { ...state }

    switch (action.type) {
        case 'AGE_UP':
            newState.age += 1
            break;
        case 'AGE_DOWN':
            newState.age -= 1
            break;
        case "Loading":
            newState.loading=true

    }
    return newState

}


export default reducer;