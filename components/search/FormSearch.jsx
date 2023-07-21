'use client'
import { useState } from 'react'
import { ImSearch } from 'react-icons/im'

const FormSearch = ({value}) => {
    const[searchValue, setSearchValue] = useState(value)
    const handleChange = (e)=>{
        setSearchValue(e.target.value)
    }
    return (
        <div className='Search mb-2.5'>
            <form action="/search" className='bg-black rounded-md overflow-hidden flex items-center w-full'>
                <input 
                    value={searchValue} onChange={handleChange} type="text" 
                    className='w-full bg-inherit text-white text-lg outline-none px-4 py-2' 
                    name="s" id="search" 
                />
                <button type='submit' className='px-4 py-3.5 group'>
                    <ImSearch className='text-xl text-p group-hover:opacity-30' />
                </button>
            </form>
        </div>
    )
}
export default FormSearch