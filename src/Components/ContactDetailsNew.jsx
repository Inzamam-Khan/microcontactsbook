import { useDispatch, useSelector } from "react-redux"
import { removeId } from "../Store/Actions"

export const ContactDetailsNew=()=>{



    const mode=useSelector(state=>state.setModeReducer)

    const selectedId=useSelector(state=>state.selectedContact)
    const dispatch=useDispatch()
    
    const contactList=useSelector(state=>state.addContactReducer)
    const contactDetails=contactList.filter((item)=>
        item.id== selectedId

    )
    

    

    return(
        <div className="list-main flex flex-col items-start justify-start  border-slate-gray  h-full md:w-full max-md:w-[70vw]  space-y-1  " >
       
       
        <div className="text-xl font-semibold   mb-1 flex max-md:flex-row-reverse items-center justify-between  w-full" >
            <h3 className=" max-md:w-full max-md:text-center">Contact Details </h3>

           <div className="max-md:hidden  cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-[1.75rem] fill-neutral-300 hover:fill-[red]" onClick={()=>dispatch(removeId())}>
           <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
           </div>

           <div className="md:hidden cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-8 h-[1.75rem] fill-neutral-300 hover:fill-[red]" onClick={()=>dispatch(removeId())}>
           <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
           </div>
            
        </div>

            

<div className="w-full  bg-transparent p-4 border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
   
    {/* <div className="flex justify-end px-4 pt-4 border"> */}

        {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button> */}
        {/* <!-- Dropdown menu --> */}
        {/* <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div> */}
    {/* </div>
    
    */}




    <div className="flex flex-col items-center pb-10  ">

        <img className="w-24 h-24 mb-3 rounded-full " src={contactDetails[0]?.img} alt="Bonnie image"/>
        <h5 className="mb-1 text-3xl font-medium  text-blue-500">{contactDetails[0].name}</h5>
        <span className={`text-md ${mode? `text-white`: ``}`} >{contactDetails[0].number}</span>
        <span className={`text-md ${mode? `text-white`: ``}`} >{contactDetails[0].email}</span>
        <span className={`text-md ${mode? `text-white`: ``}`} >{contactDetails[0].tags}</span>
        <div className="flex mt-4 md:mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white hover:bg-slate-gray rounded-lg  ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="green" className="w-5 h4" >
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </button>


            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white hover:bg-slate-gray rounded-lg  ">
            <svg className="w-5 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="blue">
<path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>
            </button>

            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white hover:bg-slate-gray rounded-lg  ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 " fill={`${mode? `white`:``}`}>
            <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg>
            </button>


            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white hover:bg-slate-gray rounded-lg  ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4   h-5" fill="red">
<path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>









        </div>
    </div>
</div>



        </div>
    )
}