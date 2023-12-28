import {useState} from 'react';
import user from '../assets/user-avatar.jpg'
import Menu from './Menu';
import  '../Styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Header(){

    const [show,setShow]=useState(false)
    const navigate=useNavigate()
return (
    <div className="header_main">
         {/* iske ko row flex */}
        <div className="inner_main">
             
             

            <div className="heading" onClick={()=>navigate("/")}><h2>Contacts Book</h2></div>


            
            <img src={user} alt=""/>






            <span className="menu_icon">
{show? <Menu setShow={setShow}/>: <svg onClick={()=>{setShow(!show)}} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                <path fill="wheat" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>}

           

           
           
            </span>



            
           
        </div>

    </div>
)

}