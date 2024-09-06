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
    
    const [tags,setTags]=useState("Family")
    console.log(tags)
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
        dispatch(edit({name,email,number,tags,id:editItem.id,img:userImage}))
            
setName(" ");
setEmail(" ");
setNumber(" ");
setTags("Family")
navigate('/')
    }

    }
    else{
        if(name===""|| number===""){
            alert('Fields Missing')
        }
        else{
            dispatch(add({name,email,number,tags,id:v4(),img:userImage}))
                
setName(" ");
setEmail(" ");
setNumber(" ");
navigate('/')
        }
       
    }

}
    return(
        <div className="addContact_main border-r border-slate-gray md:w-[22rem] h-[85vh]" >



<div className="md:w-full  h-full  bg-transparent  border-red-500 rounded-lg shadow p-6 dark:bg-gray-800 dark:border-gray-700">
   
    <form className="space-y-3  border-blue-500 w-full" action="#">
    <span className="text-xl font-semibold mb-1 " >Add Contact</span>

            <div className='flex  w-full flex-1 gap-5'>
            {imgArray.map(i=>{return(<img name="user-select" className={`rounded-full w-[2rem] ${userImage == i ? `border-[3px] border-blue-500` : ``} `} onClick={(e)=>{setUserImage(i);}} src={i}/>)})}
            </div>



        <div >
            <label for="name" className="block mb-2 text-sm font-medium  ">Name</label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="name" name="name" id="name" className="bg-transparent border  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="John Doe" required />
        </div>
        <div>
            <label for="number" className="block mb-2 text-sm font-medium  ">Number</label>
            <input type="tel" maxLength={10} value={number} onChange={(e)=>{setNumber(e.target.value)}} name="number" id="password"  placeholder="johndoe56@" className="bg-transparent border   text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " />
        </div>
        
        <div>
            <label for="email" className="block mb-2 text-sm font-medium  ">Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email"  placeholder="+91 456xxxx093" className="bg-transparent border   text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " required />
        </div>

        <div>
            <label for="tags" className="block mb-2 text-sm font-medium  ">Tags</label>
            <select name="tags" id="tags" value={tags} onChange={(e)=>setTags(e.target.value)} className="bg-transparent border border-gray-300 
             text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
                <option value="Family" className='' >Family</option>
                <option value="Friends" >Friends</option>
                <option value="Office">Office</option>
                
                </select>
        </div>

        <button onClick={handleAdd} type="submit" className="w-full  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
         ">{submitText}</button>
        
        <button onClick={()=>{navigate('/')}} type="submit" className="w-full border border-neutral-400 bg-transparent
         hover:bg-neutral-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
         ">Cancel</button>
    </form>
</div>





         </div>
    )
}









