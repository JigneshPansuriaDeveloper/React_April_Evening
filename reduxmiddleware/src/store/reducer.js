const intialState={
    age:10
}



const reducer =(state=intialState,action)=>{
const newState={...state}




switch(action.type){
    case 'AGE_UP':
        newState.age+=action.value;
        break;

    case 'AGE_DOWN':
        newState.age-=action.value;
        break;
}
return newState;

}

export default reducer;