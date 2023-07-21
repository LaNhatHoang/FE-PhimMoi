'use client'
import { useEffect, useState } from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'

const SideBarYear = () => {
    const start = new Date().getFullYear()
    const[length, setLength] = useState(14)
    const createYear = (start, length) => {
        let arr = []
        for (var i = start; i >= start - length; --i) {
            arr.push(i)
        }
        return arr;
    }
    const handleResize = ()=>{
        const width = window.innerWidth
        if(width>=768){
            setLength(14)
        }
        else{
            setLength(51)
        }
    }
    useEffect(()=>{
        const width = window.innerWidth
        if(width>= 768){
            setLength(14)
        }
        else{
            setLength(51)
        }
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    },[])
    return (
        <div className="Year text-p">
            <div className="flex justify-between mb-2.5">
                <div className='text-base font-medium'>Năm phát hành</div>
                <div className='flex items-center'>
                    <BsFillCaretDownFill className='text-sm' />
                </div>
            </div>
            <ul className="flex flex-wrap">
                {
                    createYear(start, length).map((value, index) => (
                        <li key={index} className="w-1/3 sm:w-1/4 lg:w-1/3 p-[3px]">
                            <a  href={`/nam-phat-hanh/${value}`} 
                                className='bg-art hover:bg-blue-500 hover:text-white py-1.5 text-[13px] font-medium flex justify-center'
                            >{value}</a>
                        </li>
                    ))
                }
            </ul>
        </div>

    )

}
export default SideBarYear