
const intialState={
    age:20
}


const reducer=(state=intialState,action)=>{
    const newState={...state};


    switch(action.type){
        case "AGE_UP_SYNC":
            newState.age+=action.value;
        break;
        case "AGE_DOWN":
            newState.age-=action.value;
        break;
    }
return newState;

}



export default reducer;