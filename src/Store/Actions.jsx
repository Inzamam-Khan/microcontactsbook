
export const setMode=(payload)=>{
    return{
        type:'SET_MODE',payload
    }
}




export const setSearch=(payload)=>{
    return{
        type:'SET_SEARCH',payload
    }

}



export const addFav=(payload)=>{
    return{
        type:'ADD_FAV',payload
    }
}

export const removeFav=(payload)=>{
    return{
        type:'REMOVE_FAV',payload
    }
}





export const set=(payload)=>{
    console.log(payload)
    return{
        
        type:'SET',payload
    }
}



export const add=(payload)=>{
    return{
        type:'ADD',payload
    }
}


export const remove=(payload)=>{
    return{
        type:'REMOVE',
        payload
    }
}


export const edit=(payload)=>{
    return{
        type:'EDIT',payload
    }

}