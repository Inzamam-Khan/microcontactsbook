import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Menu.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setMode } from '../Store/Actions';

export default function Menu({ setShow,isOpen,setIsOpen }) {
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const mode = useSelector(state => state.setModeReducer)
    


    useEffect(() => {
        if(showSearch){
            setTimeout(()=>{
                setShowSearch(false)
                console.log("setshow called after 7sec")

            },7000)
        }
        dispatch(setSearch(searchValue))
    }, [searchValue,showSearch])

    const onAddContactPage = () => {

        setShow(false);
        navigate('/addContact')
    }
    return (
        
        <div className="menu_main md:border-r border-slate-gray  bg-transparent flex flex-wrap items-start justify-start  p-5 h-[85vh]" style={{ zIndex: '99999' }}>

            <div id="sort " value={mode} className="switch_mode flex flex-1 items-center justify-start  font-montserrat text-sm gap-3  border-slate-gray rounded-xl p-1 w-full px-4  " >

                <button className='border border-slate-gray w-[5rem] p-1 px-2 rounded-lg bg-blue-400 text-black hover:text-white '>All</button>
                <button className='border w-[5rem] p-1 px-2 border-slate-gray rounded-lg hover:text-white'>Recent</button>
                <select className='border w-[5rem] p-1 px-2 border-slate-gray rounded-lg bg-transparent hover:text-white'>

                    <option value="family" className={`border w-[5rem] p-1 px-2  border-slate-gray rounded-lg ${mode? `bg-[#212529]`:`bg-[#DEE2E6]`}`}>Family</option>
                    <option value="friend" className={`border w-[5rem] p-1 px-2 border-slate-gray rounded-lg hover:text-white ${mode? `bg-[#212529]`:`bg-[#DEE2E6]`}`}>Friends</option>
                    <option value="office" className={`border w-[5rem] p-1 px-2 border-slate-gray rounded-lg hover:text-white ${mode? `bg-[#212529]`:`bg-[#DEE2E6]`}`}>Office</option>

                </select>

            </div>

            <div id="home " value={mode} className=" cursor-pointer switch_mode flex items-center justify-start gap-3 border border-slate-gray rounded-xl p-1 w-full px-4  " onClick={() => {navigate("/"); setIsOpen(!isOpen)}}>


                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-5 h-4' fill={`${mode? `#DEE2E6`: `black`}`} >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                Home</div>

            <div className="cursor-pointer search flex items-center justify-start gap-3 border border-slate-gray rounded-xl p-1 w-full px-4 " onClick={() => { setShowSearch(true);}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"fill={`${mode? `#DEE2E6`: `black`}`}  viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                Search
            </div>

            {showSearch && <input type="text" className="px-2 search_field border border-slate-gray ml-2" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} placeholder='Search' />}

            <div className="add_contacts cursor-pointer border-slate-gray flex items-center justify-start gap-3 border rounded-xl p-1 w-full px-4 " onClick={()=>{navigate("/addContact");setIsOpen(!isOpen)}}>
                 <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512" fill={`${mode? `#DEE2E6`: `black`}`} >
                 <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg> Add New </div>

            <div className=" cursor-pointer menu_fav flex items-center justify-start gap-3 border border-slate-gray rounded-xl p-1 w-full px-4 " onClick={() => { navigate('/favourites');setIsOpen(!isOpen) }}>
                <svg fill={`${mode? `#DEE2E6`: `black`}`}  xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                Favourites</div>

            <div id="mode " value={mode} className="switch_mode cursor-pointer flex items-center
             justify-start gap-3 border border-slate-gray rounded-xl p-1 w-full px-4  " onClick={() => dispatch(setMode(!mode))}>


                <svg fill={`${mode? `#DEE2E6`: `black`}`}  xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">

                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg>

                Switch Mode</div>

            <div id="copyright "  className="copyright cursor-pointer flex items-center justify-start gap-3 border border-slate-gray rounded-xl p-1 w-full px-4  " >

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={`${mode? `#DEE2E6`: `black`}`} height="16" width="16">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"/></svg>
               

                Terms & Condition</div>



               


            <div className=" flex items-center justify-start mt-auto  gap-3  rounded-xl p-1 w-full px-4 " onClick={() => { setShowSearch(true) }}>


                <img src="https://bit.ly/dan-abramov" alt="" className='border rounded-full  w-[3rem]' />
                John Doe
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-4 cursor-pointer hover:fill-slate-600'
                 fill={`${mode? `#DEE2E6`: `black`}`} >
<path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
            </div>





        </div>


    





    )
}