import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (<form className='flex itme-centr gap-2'>
    <input type="text" placeholder='Search...' className='input input-bordered rounded-full' ></input>
    <button type='submit'  className='btn-circle ng-sky-500 text-white'>
    <FaSearch className='w-6 h-6 outline-none'/>
    </button>
     
     
     
     
     </form>
  
  )
}

export default SearchInput
