import '../Styles/AddContacts.css'

import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, edit} from '../Store/Actions';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
 import user from '../assets/user-avatar.jpg'
 import userimg1 from '../assets/user1.png'

 import userimg2 from '../assets/user2.jpg'
 import userimg3 from '../assets/user3.png'
 import userimg4 from '../assets/user4.png'
 import userimg5 from '../assets/user5.jpg'
export default function AddContacts({editItem}){
    
   const title=editItem?"Edit":"Add"
    
    const [name,setName]=useState(editItem?.name||"");
    const [email,setEmail]=useState(editItem?.email||"");
    const [number,setNumber]=useState(editItem?.number||"")
    const [userImage,setUserImage]=useState(user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const submitText=editItem?"Update":"Add"
    const imgArray=[user,userimg1,userimg2,userimg3,userimg4,userimg5];

    
   

const handleAdd=(e)=>{
    e.preventDefault();
    if(editItem){
        if(name===""|| number===""){
            alert('Fields Missing')}
            else{
        dispatch(edit({name,email,number,id:editItem.id,img:userImage}))
            
setName(" ");
setEmail(" ");
setNumber(" ");
navigate('/')
    }

    }
    else{
        if(name===""|| number===""){
            alert('errro')
        }
        else{
            dispatch(add({name,email,number,id:v4(),img:userImage}))
                
setName(" ");
setEmail(" ");
setNumber(" ");
navigate('/')
        }
       
    }

}
    return(
        <div className="addContact_main" >
            

            <div className="addContacts_section_left" style={{position:'relative'}}>
               

               
               <img src={userImage}  name="avatar" alt="" />

               <div className='addContacts_user_arrray' >
                {imgArray.map(i=>{return(<img name="user-select" onClick={(e)=>{setUserImage(i);}} src={i}/>)})}
               </div>
               
               





                {/* <svg style={{position:'absolute',left:'2.5em',bottom:'1em'}} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path fill="#003566" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>  */}


                {/* <input type="file" accept='img/*' id="userimg"  onChange={(e)=>{setUserImage(e.target.value)}}/> */}
            </div>

            <div className="addContactCard">

            <h2>{title} Contact</h2>
<form>
            <div className="name">
                <h5>Name:</h5>
                <input maxLength="25" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>


            <div className="number">
                <h5>Number:</h5>
                <input type="tel" maxLength={10} value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            </div>


            <div className="email">
                <h5>Email:</h5>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>

           


            <div className="buttons">
                 {/* {props?.editItem?.detailsId?
            <button type="submit"onClick={handleUpdate}>Update</button>
            :<button type="submit" onClick={handleAdd}>Add</button>
                 } */}
                 <button onClick={handleAdd}>{submitText}</button>
                
                <button onClick={()=>{navigate('/')}}>Cancel</button>
            </div>
            </form>
            
        </div>


        </div>
    )
}