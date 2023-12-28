import { combineReducers } from "redux";


function addContactReducer(state=[],action){
    const {type,payload}=action;
    switch(type){
        case 'ADD':{
            return [...state,payload]
        }

        case 'REMOVE':{
            const{id}=payload
            const newContact=state.filter(i=>i.id!==id);
            return newContact;
        }

        case "EDIT":
            {
                const {id}=payload;
                console.log(id)
            }



        default:
        {
            return state;
        }
    }


}

export const allReducers=combineReducers({
    addContactReducer
})
