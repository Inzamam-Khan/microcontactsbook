import user from '../assets/user-avatar.jpg'
import '../Styles/ContactsList.css'
import { useState, useEffect } from 'react';
import { set, add, addFav, removeFav, setId } from '../Store/Actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
export default function ContactsList(props) {



    const contactsList = useSelector(state => state.addContactReducer)
    const mode=useSelector(state=>state.setModeReducer)
    const selectedId=useSelector(state=>state.selectedContact)
    const navigate=useNavigate()

    const favList = useSelector(state => state.addFavReducer)

    const dispatch = useDispatch()

    const handleFav = (item) => {
        const t = (favList.findIndex(i => Object.values(i).join('').includes(item.id)))
        if (t < 0) {
            // console.log('add')
            dispatch(addFav(item))
        }
        else {
            // console.log('remove')
            if(confirm("Remove Favourites?")){
                dispatch(removeFav(item))
            }
            
        }

    }




    const setItem = () => {
        localStorage.setItem("contacts", JSON.stringify(contactsList))
    }


    const setFav = () => { localStorage.setItem("fav", JSON.stringify(favList)) }







    useEffect(() => { setItem() }, [contactsList])

    useEffect(() => { setFav() }, [favList])

    

    const title = props.favContacts ? "Favourties" : "Contacts"


    const t = props.favContacts ? props.favContacts : contactsList

    const renderList = (props.searchTerm ? (contactsList.filter(i => Object.values(i).join('').toLowerCase().includes(props.searchTerm))) : (t)).map((item, index) => {

        const name = item?.name;
        const email = item?.email;
        const number = item?.number;
        const userImage = item?.img;
        const tags=item?.tags
        const Id=item?.id



        return (

            <div className="contactListCard    max-w-[22rem] w-[20rem] border-blue-500 flex items-center" key={index}>


                {/* <Link to={`/contactDetails/${item?.id}`}> */}
                    {/* each card */}
                    <div className={`cursor-pointer card_inner flex flex-1  items-center px-2 h-[3rem] gap-2 border-b border-slate-gray mb-2 ${(selectedId ==Id & mode)? `bg-slate-gray rounded-xl`: `${selectedId== Id && !mode? `bg-neutral-400 rounded-xl`: ``}`} ${mode? ``:``}`} onClick={()=>dispatch(setId(Id))}>

                        <div>
                            <img src={userImage} alt="" className=' rounded-full w-8 max-w-[8rem]' />
                        </div>

                        <div className="info  border-red-500 w-full  h-full flex  flex-col overflow-hidden
                         justify-start items-start px-2">

                            <div className={`name flex  flex-1 items-center justify-start  w-full ${mode ? `text-neutral-100`: ``} `}>
                                {name}
                            </div>

                            <div className="name w-full flex items-center justify-between"> {email} 
                               <span> {tags}
                               </span>
                               </div>



                        </div>


                    
                    </div>


                    <span onClick={() => handleFav(item)} className='cursor-pointer ml-1'>{
                    (favList.findIndex(i => Object.values(i).join('').includes(item.id))) < 0 ?
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill={`${mode? `white`:``}`}>
                            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>

                        : <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" >
                            <path fill='#1985a1' d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                }</span>



                {/* </Link> */}

                


            </div>

        )
    })

    

    return (
        // contacts card container
        <div className="list-main  flex flex-col items-start justify-start md:border-r border-slate-gray  h-[85vH] md:w-[24rem] space-y-1 p-6  " >

            <span className="text-xl font-semibold mb-1 " >{title} {t.length}</span>

            {renderList?.length > 0 ? <>{renderList}</> :
             <div  className=' w-full text-3xl  font-montserrat  h-1/2 mt-[4rem] flex flex-col justify-center items-center '
        >Start Adding {title} 


        <button className='border border-blue-500 hover:bg-neutral-400  hover:text-black py-1 px-3 rounded-3xl mt-6 bg-transparent font-montserrat' onClick={()=>navigate("/addContact")}>Start +</button>
         {/* >
                 <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512" fill={`${mode? `#DEE2E6`: `black`}`} >
                 <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg> Add New </div> */}
        </div>
            }


        </div>

    )



}



