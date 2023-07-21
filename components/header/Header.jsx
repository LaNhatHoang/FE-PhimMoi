"use client"
import { BsFillCaretDownFill, BsFillCaretRightFill } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'
import { useState, useEffect } from 'react'
import Image from 'next/image';
const transliteration = require('transliteration');

function normalizeVietnamese(text) {
    return transliteration.transliterate(text);
}

const Header = () => {
    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const [currentY, setCurrentY] = useState(0)
    const categorys = [
        "Phim Chiếu Rạp", "Phim Cổ Trang", "Phim Tâm Lý", "Phim Tình Cảm", "Phim Bí Ẩn", "Phim Kinh Dị", "Phim Hành Động", "Phim Võ Thuật",
        "Phim Kịch Tính", "Phim Chiến Tranh", "Phim Phiêu Lưu", "Phim Hài", "Phim BL", "Phim 18+", "Phim Hình Sự", "Phim Gia Đình",
        "Phim Khoa Học", "Phim Viễn Tưởng", "Phim Netflix", "Phim Âm Nhạc", "Phim Thần Thoại", "Phim Hoạt Hình", "Phim Chính Kịch", "TV Shows"
    ]
    const countrys = [
        "Phim Âu Mỹ", "Phim Hàn Quốc", "Phim Trung Quốc", "Phim Nhật Bản", "Phim Đài Loan", "Phim Hồng Kông",
        "Phim Thái Lan", "Phim Ấn Độ", "Phim Philippines", "Phim Việt Nam", "Phim Indonesia", "Phim Singapore"
    ]
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.pageYOffset

            if (scrollY > currentY && isHeaderVisible) {
                setHeaderVisible(false);
                setCurrentY(scrollY)
            } else if (scrollY <= currentY && !isHeaderVisible) {
                setHeaderVisible(true);
                setCurrentY(scrollY)
            }
        };
        function handleMouseMove(event) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // console.log('Tọa độ chuột:', mouseX, mouseY);
            if (mouseY <= 70 && !isHeaderVisible) {
                setHeaderVisible(true)
            }

            // Sử dụng tọa độ chuột theo ý đồ của bạn
        }
        document.addEventListener('scroll', handleScroll);
        document.addEventListener('mousemove', handleMouseMove);

    });

    return (
        <div className="Header bg-header shadow-header text-white fixed top-0 w-full z-50">
            <div className='bg-header w-full flex justify-center'>
                <div className={isHeaderVisible ? "max-w-screen-3xl hidden xl:flex flex-auto justify-between" : "hidden"}>
                    <div className="h-left flex ">
                        <div className="Logo w-44 bg-zinc-900 flex justify-center items-center text-xl">
                            <a className='w-[9.5rem] h-[2rem]' href="/">
                                <Image src="/phimmoi.png" width={152} height={32} alt='logo' />
                            </a>
                        </div>
                        <div className="flex items-center text-base font-medium hover:text-blue-500 text-slate-300">
                            <a className='px-5 py-6' href="/">Phimmoi</a>
                        </div>
                        <div className="flex items-center text-base font-medium hover:text-blue-500 text-slate-300">
                            <a className='px-5 py-6' href="/phim-le">Phim lẻ</a>
                        </div>
                        <div className="flex items-center text-base font-medium hover:text-blue-500 text-slate-300">
                            <a className='px-5 py-6' href="/phim-bo">Phim bộ</a>
                        </div>
                        <div className="px-5 py-6 flex items-center text-base font-medium relative hover:text-blue-500 hover:cursor-pointer text-slate-300 group">
                            <div>Thể loại</div>
                            <BsFillCaretDownFill className='text-xs ms-2' />
                            <ul className='absolute bg-ul shadow-ul top-full left-0 xl:w-[21rem] 2xl:w-[31.5rem] hidden flex-wrap group-hover:flex font-normal'>
                                {
                                    categorys.map((value, index) => (
                                        <li key={index} className='bg-ul xl:w-1/2 2xl:w-1/3'>
                                            <a href={`/the-loai/${normalizeVietnamese(value).replace(/\s+/g, '-').toLowerCase()}`} className='flex items-center text-sm px-4 py-2 text-p hover:text-blue-500'>
                                                <BsFillCaretRightFill className='text-xs me-1.5' />
                                                {value}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="px-5 py-6 flex items-center text-base font-medium relative hover:text-blue-500 hover:cursor-pointer text-slate-300 group">
                            <div>Quốc gia</div>
                            <BsFillCaretDownFill className='text-xs ms-2' />
                            <ul className='absolute bg-ul shadow-ul top-full left-0 bg-slate-950 flex flex-wrap xl:w-[20.5rem] 2xl:w-[30.75rem] hidden group-hover:flex font-normal'>
                                {
                                    countrys.map((value, index) => (
                                        <li key={index} className='bg-ul xl:w-1/2 2xl:w-1/3'>
                                            <a href={`/quoc-gia/${normalizeVietnamese(value).replace(/\s+/g, '-').toLowerCase()}`} className='flex items-center text-sm px-4 py-2 text-p hover:text-blue-500'>
                                                <BsFillCaretRightFill className='text-xs me-1.5' />
                                               {value}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="h-right hidden 2xl:flex items-center">
                        <form action="/search" className='bg-input rounded-md flex items-center'>
                            <input type="text" placeholder="Tìm kiếm..." 
                                className='bg-inherit w-72 text-sm outline-none px-3 py-2 rounded-md' 
                                name="s" id="search" 
                            />
                            <button type='submit' className='px-3 py-3'>
                                <ImSearch />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header