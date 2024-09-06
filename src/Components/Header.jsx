import {useState} from 'react';
import user from '../assets/user-avatar.jpg'
import Menu from './Menu';
import  '../Styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Header({isOpen,setIsOpen}){

    const mode=useSelector(state=>state.setModeReducer)

    
    const navigate=useNavigate()
return (
    

        <div className=" relative  p-2 flex items-center justify-center border-b  border-neutral-600 w-[97vw]">

                <Link to="/">
            <h4 className='text-center text-3xl font-semibold font-palanquin text-blue-500 '>Contacts Book</h4>
            </Link>



            <div className="cursor-pointer md:hidden   ml-auto mr-4" onClick={()=>setIsOpen(!isOpen)}>
                {isOpen ? 
                <svg fill={`${mode ? `white`: `black`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5 ">
           <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
           :  
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-5 h-4 ' fill={`${mode ? `white`: `black`}`}>
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>}
            
           
            </div>



            <div className={`fixed transform ease-in-out transition-all duration-300 ${isOpen? `translate-x-0`: `translate-x-[40rem]`} 
            md:hidden  border ${mode? `bg-[#212529]`:`bg-[#DEE2E6]`} z-50  w-[20rem] top-[4rem] h-[90vh]`}>

<Menu/>
</div>




        </div>















    
             
             



            
    //         <img src={user} alt="" onClick={()=>{navigate('/myDetails')}}/>
            
    //         <span className="menu_icon">
    //         {show? <Menu setShow={setShow}/>: 
    //         <svg onClick={()=>{setShow(!show)}} xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
    //             <path fill="wheat" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>}

           

           
           
    //         </span>



            
           
    //     </div>

    // </div>
)

}