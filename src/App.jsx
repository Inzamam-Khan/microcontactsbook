
import Header from '../src/Components/Header'
import ContactsList from './Components/ContactsList'
import AddContacts from './Components/AddContacts'
import NotFound from './Components/NotFound'
import {useEffect, useState} from 'react'
import Menu from './Components/Menu'


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ContactDetails from './Components/ContactDetails'
import { useSelector } from 'react-redux'

function App() {

  const [editItem,setEditItem]=useState()

  const favContacts=useSelector(state=>state.addFavReducer)

  const searchTerm=useSelector(state=>state.setSearchReducer)

  const mode=useSelector(state=>state.setModeReducer)  


useEffect(()=>{
  localStorage.setItem("mode",JSON.stringify(mode))
},[mode])

//true
const root=document.getElementById('body').style;

 if(mode){
  
  root.backgroundColor='#212529'
  root.color='#adb5bd'
 }
 //false
 else{
  root.backgroundColor="";
  root.color=""
 
 }
  

const handleId=(item)=>{
  
  
  setEditItem(item)

}


  return (
    <div className="">
      
        
        
        <Routes>
        
          <Route exact path='/' element={<ContactsList searchTerm={searchTerm} />}/>
          <Route exact path='/addContact' element={<AddContacts />}/>
          <Route exact path='/editContact' element={<AddContacts editItem={editItem}/>}/>
          <Route exact path='/favourites' element={<ContactsList favContacts={favContacts}/>}/>
          <Route exact path='/contactDetails/:detailsId' element={<ContactDetails handleId={handleId}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      

    </div>

  )
}

export default App
