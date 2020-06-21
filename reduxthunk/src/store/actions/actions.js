export const ageUp=val=>{
    console.log('action called')
    return{
        type:'AGE_UP',
        value:val
    }
}

export const ageDown=val=>{
    return{
        type:'AGE_DOWN',
        value:val
    }
}