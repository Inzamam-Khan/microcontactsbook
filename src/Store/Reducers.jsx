import { json } from "react-router-dom";
import { combineReducers } from "redux";
import {v4} from 'uuid'


const addContactsInitial=()=>{
    const t=JSON.parse(localStorage.getItem("contacts"))
    if(t){
        return t;
    }
    else{
        return []
    }

}



function addContactReducer(state=addContactsInitial(),action){
    const {type,payload}=action;

    switch(type){

        


        case 'ADD':
            {  
                      if(payload){
                        return [...state,payload]            
                      }               
        }

        case 'REMOVE':{
            
            
            const newContact=state.filter(i=>i.id!==payload);
            
            return newContact;
        }

        case 'EDIT':{
            console.log(payload)
            
            const contact=state.filter(i=>i.id!==payload.id);
            return [...contact,{...payload}]
        }
       



        default:
        {
            return state;
        }
    }


}

const addFavInitial=()=>
{
    const t=JSON.parse(localStorage.getItem("fav"))
    if(t){
        return t;
    }
    else {
        return []
    }
}


function setSearchReducer(state="",action){
    const {type,payload}=action;
    switch(type){
        case "SET_SEARCH":
            {
                return payload
            }
        default:{
            return state;
        }
    }

}


function addFavReducer(state=addFavInitial() ,action){
    const{type,payload}=action
    
    
    switch(type){
        case 'ADD_FAV':
            {
                if(payload){
                    return [...state,payload]}
            }
        case 'REMOVE_FAV':
            {
                
                
                const fav=state.filter(i=>i.id!==payload.id)
                return fav;
            }
        default:
            {
                return state;
            }
    }

}
const setModeInitial=()=>{
   const mode= JSON.parse(localStorage.getItem("mode"))
    if(mode){
        return mode;
    }
    else{
        return false
    }
}
function setModeReducer(state=setModeInitial(),action){
    const {type,payload}=action;
    switch(type){
        case 'SET_MODE':
            {
                return state=payload
        }
        default:{
            return state;
        }
    }

}


function selectedContact(state=null,action){
    const {payload,type}=action;

    switch(type){
        case "SET_ID":{
            return state=payload;
        }
        case "REMOVE_ID":
        {
            return state=null;

        }
        default:{
            return state;
        }
    }

}









export const allReducers=combineReducers({
    addContactReducer,addFavReducer,
    setSearchReducer,setModeReducer,selectedContact
})
