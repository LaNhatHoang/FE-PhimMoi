"use client"
import { ImSearch } from 'react-icons/im'
import { CgMenu } from 'react-icons/cg'
import { IoIosRemove, IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import Image from 'next/image'
const transliteration = require('transliteration');

function normalizeVietnamese(text) {
    return transliteration.transliterate(text);
}
const HeaderRep = () => {
    const [menu, setMenu] = useState(false)
    const [search, setSearch] = useState(false)
    const categorys = [
        "Phim Chiếu Rạp", "Phim Cổ Trang", "Phim Tâm Lý", "Phim Tình Cảm", "Phim Bí Ẩn", "Phim Kinh Dị", "Phim Hành Động", "Phim Võ Thuật",
        "Phim Kịch Tính", "Phim Chiến Tranh", "Phim Phiêu Lưu", "Phim Hài", "Phim BL", "Phim 18+", "Phim Hình Sự", "Phim Gia Đình",
        "Phim Khoa Học", "Phim Viễn Tưởng", "Phim Netflix", "Phim Âm Nhạc", "Phim Thần Thoại", "Phim Hoạt Hình", "Phim Chính Kịch", "TV Shows"
    ]
    const countrys = [
        "Phim Âu Mỹ", "Phim Hàn Quốc", "Phim Trung Quốc", "Phim Nhật Bản", "Phim Đài Loan", "Phim Hồng Kông",
        "Phim Thái Lan", "Phim Ấn Độ", "Phim Philippines", "Phim Việt Nam", "Phim Indonesia", "Phim Singapore"
    ]
    return (
        <div className='Header-rep bg-header flex-1 xl:hidden text-white'>
            <header className='Header-rep bg-header flex justify-between'>
                <div className='Nav flex items-center px-4 text-2xl hover:cursor-pointer' onClick={() => setMenu(!menu)}>
                    {menu ? <IoMdClose className='text-blue-400' /> : <CgMenu />}
                </div>
                <div className='Logo py-3' >
                    <a href="/">
                        <Image src="/phimmoi.png" width={152} height={32} alt='logo' />
                    </a>
                </div>
                <div className='Search flex items-center px-4 text-xl hover:cursor-pointer' onClick={() => setSearch(!search)}>
                    {search ? <IoMdClose className='text-blue-400 text-2xl' /> : <ImSearch />}
                </div>
            </header>
            {search ?
                <div className='Search'>
                    <form action="/search" className='bg-black flex items-center w-full'>
                        <input type="text" placeholder="Tìm kiếm..." 
                            className='w-full bg-inherit text-p text-lg outline-none px-3 py-2' 
                            name="s" id="search" 
                        />
                        <button type='submit' className='px-4 py-3.5'>
                            <ImSearch className='text-xl' />
                        </button>
                    </form>
                </div>
                : <></>

            }
            <div className='Menu relative'>
                {menu ?
                    <div className='absolute w-full z-50'>
                        <ul className='bg-ul'>
                            <li className='bg-ul text-lg font-semibold c-border border-b text-l hover:text-blue-500 hover:bg-black hover:cursor-pointer'>
                                <a className='px-3 py-3 block' href="/">Phimmoi</a>
                            </li>
                            <li className='bg-ul text-lg font-semibold c-border border-b text-l hover:text-blue-500 hover:bg-black hover:cursor-pointer'>
                                <a className='px-3 py-3 block' href="/phim-le">Phim lẻ</a>
                            </li>
                            <li className='bg-ul text-lg font-semibold c-border border-b text-l hover:text-blue-500 hover:bg-black hover:cursor-pointer'>
                                <a className='px-3 py-3 block' href="/phim-bo">Phim bộ</a>
                            </li>
                            <li className='bg-ul'>
                                <div className='text-lg font-semibold px-3 py-3 text-l hover:text-blue-500 hover:bg-black hover:cursor-pointer'>Thể loại</div>
                                <ul className='flex flex-wrap pb-3 border-b c-border'>
                                    {
                                        categorys.map((value, index) => (
                                            <li key={index} className='w-1/2 md:w-1/3'>
                                                <a href={`/the-loai/${normalizeVietnamese(value).replace(/\s+/g, '-').toLowerCase()}`}
                                                    className='flex items-center text-sm text-p hover:text-blue-500 px-4 py-1'>
                                                    <IoIosRemove className='text-xs me-1' />
                                                    {value}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li className='bg-ul'>
                                <div className='text-lg font-semibold px-3 py-3 text-l hover:text-blue-500 hover:bg-black hover:cursor-pointer'>Quốc gia</div>
                                <ul className='flex flex-wrap pb-3'>
                                    {
                                        countrys.map((value, index) => (
                                            <li key={index} className='w-1/2 md:w-1/3'>
                                                <a href={`/quoc-gia/${normalizeVietnamese(value).replace(/\s+/g, '-').toLowerCase()}`}
                                                    className='flex items-center text-sm text-p hover:text-blue-500 px-4 py-1'>
                                                    <IoIosRemove className='text-xs me-1' />
                                                    {value}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>

                        </ul>
                    </div>
                    : <></>

                }
            </div>
        </div>
    )
}

export default HeaderRep