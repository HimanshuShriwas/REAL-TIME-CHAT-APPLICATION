import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './conversations.jsx'
import LogoutButton from './Logout'
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>

      <SearchInput/>
      <div className='divider px-3'></div>
      <Conversations/>

      <LogoutButton/>
    </div>
    
  )
}
export default Sidebar
