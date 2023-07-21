'use client'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const SlideTrend = (props) => {
    const { countSlide,title, data } = props
    const slideRef = useRef(null);
    const wrapRef = useRef(null)
    const trans = useRef(0);
    const startPos = useRef(0);
    const prePos = useRef(0)
    const indexSlide = useRef(0)
    const [isDragging, setIsDragging] = useState(false);
    const [link, setLink] = useState(true);

    const getCountSlideWrap = (width) => {
        if (width < 930) {
            // no response
            return 3
        }
        else if (width < 1200) {
            //xl
            return 4
        }
        else {
            //3xl
            return 5
        }
    }
   
    const handleResize = () => {
        const widthWrap = wrapRef.current.getBoundingClientRect().width
        const countSlideWrap = getCountSlideWrap(window.innerWidth)
        const maxWidth = (countSlide - countSlideWrap) * (widthWrap / countSlideWrap)
        trans.current = (0 - widthWrap / countSlideWrap) * indexSlide.current
        if (0 - trans.current >= maxWidth) {
            trans.current = 0 - maxWidth
            indexSlide.current = Math.round(maxWidth * countSlideWrap / widthWrap)
        }
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `none`
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const handleMouseDown = (e) => {
        e.preventDefault()
        const x = e.clientX
        startPos.current = x
        prePos.current = x
        setIsDragging(true);
    }
    const handleMouseMove = (e) => {
        if (!isDragging) {
            return
        }
        e.preventDefault()
        setLink(false)
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const distance = e.clientX - prePos.current;
        if(trans.current+distance>0 || trans.current+distance< 0-maxWidth){
            trans.current = trans.current + distance/5
        }
        else{
            trans.current = trans.current + distance;
        }
        prePos.current = e.clientX;
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `none`
    };
    const handleMouseUp = (e) => {
        if (!isDragging) {
            return
        }
        e.preventDefault()
        setIsDragging(false);
        setLink(true)
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const x = e.clientX
        const distance = x - startPos.current
        if (distance == 0) {
            return
        } else {
            const count = Math.ceil(Math.abs(distance) * countSlide / widthSilde)
            trans.current = trans.current - distance
            if (distance < 0) {
                trans.current -= count * widthSilde / countSlide
            }
            else {
                trans.current += count * widthSilde / countSlide
            }
        }
        if (0 - trans.current >= maxWidth) {
            trans.current = 0 - maxWidth
        }
        if (trans.current > 0) {
            trans.current = 0
        }
        indexSlide.current = Math.round(Math.abs(trans.current * countSlide / widthSilde))
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `all 0.2s ease`
    };
    const handleTouchStart = (event) => {
        // Lấy vị trí chạm ban đầu
        const touchStartX = event.touches[0].clientX;
        startPos.current = touchStartX
        prePos.current = touchStartX
    };
    const handleTouchMove = (event) => {
        // event.preventDefault();
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const distance = event.touches[0].clientX - prePos.current;
        if(trans.current+distance>0 || trans.current+distance< 0-maxWidth){
            trans.current = trans.current + distance/5
        }
        else{
            trans.current = trans.current + distance;
        }
        prePos.current = event.touches[0].clientX;
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `none`
    };
    const handleTouchEnd = (event) => {
        // Loại bỏ các sự kiện lắng nghe khi kết thúc chạm vuốt
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const x = event.changedTouches[0].clientX
        const distance = x - startPos.current
        if (distance == 0) {
            return
        } else {
            const count = Math.ceil(Math.abs(distance) * countSlide / widthSilde)
            trans.current = trans.current - distance
            if (distance < 0) {
                trans.current -= count * widthSilde / countSlide
            }
            else {
                trans.current += count * widthSilde / countSlide
            }
        }
        if (0 - trans.current >= maxWidth) {
            trans.current = 0 - maxWidth
        }
        if (trans.current > 0) {
            trans.current = 0
        }
        indexSlide.current = Math.round(Math.abs(trans.current * countSlide / widthSilde))
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `all 0.2s ease`
    };
    const handleClickLeft = () => {
        const widthWrap = wrapRef.current.getBoundingClientRect().width
        const countSlideWrap = getCountSlideWrap(window.innerWidth)
        if (indexSlide.current >= 1) {
            indexSlide.current -= 1
            trans.current = (0 - widthWrap / countSlideWrap) * indexSlide.current
            slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
            slideRef.current.style.transition = `all 0.2s ease`
            console.log(indexSlide.current);
        }
        else {
            indexSlide.current = countSlide - countSlideWrap
            trans.current = (0 - widthWrap / countSlideWrap) * indexSlide.current
            slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
            slideRef.current.style.transition = `all 0.8s ease`
            console.log(indexSlide.current);
        }
    }
    const handleClickRight = ()=>{
        const widthWrap = wrapRef.current.getBoundingClientRect().width
        const countSlideWrap = getCountSlideWrap(window.innerWidth)
        if(indexSlide.current < countSlide - countSlideWrap){
            indexSlide.current += 1
            trans.current = (0 - widthWrap / countSlideWrap) * indexSlide.current
            slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
            slideRef.current.style.transition = `all 0.2s ease`
            console.log(indexSlide.current);
        }
        else{
            indexSlide.current = 0
            trans.current = 0
            slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
            slideRef.current.style.transition = `all 0.8s ease`
            console.log(indexSlide.current);
        }
    }
    return (
        <div className="Slide mb-6">
            <header className="px-2.5 py-3.5 overflow-hidden">
                <h2 className="pl-2.5 float-left border-l-[3px] border-blue-500 text-white text-xl font-semibold">{title}</h2>
                <div className="flex text-p text-lg float-right">
                    <div onClick={handleClickLeft} className="px-3 py-1 me-1 lg:border-0 lg:ps-2.5 lg:pe-0 lg:m-0 border rounded border-stone-600 hover:text-blue-500 hover:cursor-pointer">
                        <BsFillCaretLeftFill />
                    </div>
                    <div onClick={handleClickRight} className="px-3 py-1 lg:ps-0 lg:pe-0 lg:border-0 border rounded border-stone-600 hover:text-blue-500 hover:cursor-pointer">
                        <BsFillCaretRightFill />
                    </div>
                </div>
            </header>
            <div ref={wrapRef} className="Wrap overflow-hidden w-full border-b c-border">
                <div
                    ref={slideRef}  
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className={
                        countSlide == 10 ? "Content h-full w-333 xl:w-250 3xl:w-200 block overflow-hidden" :
                        countSlide == 12 ? "Content h-full w-400 xl:w-300 3xl:w-240 block overflow-hidden":
                        "Content h-full w-500 xl:w-375 3xl:w-300 block overflow-hidden"
                    }
                >
                    {
                        data.map((film, index) => (
                            <div key={index} className={
                                countSlide == 10 ? "left-0 float-left w-1/10" : countSlide == 12 ? "left-0 float-left w-1/12" : "left-0 float-left w-1/15"
                            }>
                                <article className='p-[5px] md:p-2.5 w-full hover:cursor-pointer'>
                                    <div style={{ paddingTop: '140%' }} className="Poster relative overflow-hidden">
                                        <Image 
                                            className='absolute top-0 w-full' src={`/api/image/${film.urlImage}`} 
                                            alt={film.name} width={185} height={278} 
                                        />
                                        {/* <img className='absolute top-0 w-full' src={`/api/image/${film.urlImage}`} alt={film.name} /> */}
                                        <div className='px-2.5 py-0.5 bottom-[5px] left-[5px] text-[10px] uppercase text-white font-medium absolute bottom-0 bg-blue-500'>{film.sub}</div>
                                        <div className='px-2.5 py-0.5 text-[10px] uppercase text-white font-medium absolute top-0 bg-red'>NỔI BẬT</div>
                                        {
                                            link ?
                                                <a href={film.type == 'movies' ? `/phim-le/${film.url}`: `/phim-bo/${film.url}`}>
                                                    <div className='absolute z-20 top-0 w-full h-full flex items-center justify-center'>
                                                        <Image className='Play w-1/3 opacity-0 scale-1.2' src='/play1.png' alt='' width='50' height='50' />
                                                    </div>
                                                </a>
                                                :
                                                <div>
                                                    <div className='absolute z-20 top-0 w-full h-full flex items-center justify-center'>
                                                        <Image className='Play w-1/3 opacity-0 scale-1.2' src='/play1.png' alt='' width='50' height='50' />
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    <div className="Data mt-3.5 mb-2.5 block w-full">
                                        <h3 className='w-full float-left line-clamp-1 text-white hover:text-blue-500 text-sm font-medium'>
                                            {link ? 
                                                <a href={film.type == 'movies' ? `/phim-le/${film.url}`: `/phim-bo/${film.url}`}>
                                                    {film.name}
                                                </a> 
                                                : <span>{film.name}</span>}
                                        </h3>
                                        <span className='text-p text-xs font-medium'>{film.year}</span>
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default SlideTrend