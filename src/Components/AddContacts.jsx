import '../Styles/AddContacts.css'
import {v4}from 'uuid'
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/Actions';
import { useNavigate } from 'react-router-dom';
export default function AddContacts(props){
    console.log(props.editId.id)
    const details=useSelector(state=>state.addContactReducer)

    const submitText=props.id? "Update":"Add";
    const [name,setName]=useState(props.editId.name||'');
    const [email,setEmail]=useState(props.editId.email||'');
    const [number,setNumber]=useState(props.editId.number||'')
    const dispatch=useDispatch()
    const navigate=useNavigate()

const submitDetails=(e)=>{
    e.preventDefault();
    dispatch(add({name,email,number,id:v4()}))
    setName("");
    setEmail("");
    setNumber("");
    navigate('/')

}



    return(
        <div className="addContact_main">
            <div className="addContactCard">

            <h2>Add Contact</h2>
<form>
            <div className="name">
                <h5>Name:</h5>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className="email">
                <h5>Email:</h5>
                <input type="text"value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>

            <div className="number">
                <h5>Number:</h5>
                <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            </div>


            <div className="buttons">
                <button type="submit" onClick={(e)=>{submitDetails(e)}}>{submitText}</button>
                <button onClick={()=>{navigate('/')}}>Cancel</button>
            </div>
            </form>
            
        </div>


        </div>
    )
}