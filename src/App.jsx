
import Header from '../src/Components/Header'
import ContactsList from './Components/ContactsList'
import AddContacts from './Components/AddContacts'
import NotFound from './Components/NotFound'
import {useState} from 'react'
import Menu from './Components/Menu'


import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  const [editId,setEditId]=useState('')

const handleId=(item)=>{
  
  
  setEditId(item)

}
  return (
    <div className="app-main">
      <Router>
        <Header menu={<Menu/>}/>
        <Routes>
        <Route element={<NotFound/>}/>
          <Route exact path='/' element={<ContactsList handleId={handleId}/>}/>
          <Route exact path='/addContact' element={<AddContacts editId={editId}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>

    </div>

  )
}

export default App
