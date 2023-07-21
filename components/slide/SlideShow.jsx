'use client'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SlideShow = (props) => {
    const { data } = props
    const slideRef = useRef(null);
    const wrapRef = useRef(null)
    const trans = useRef(0);
    const startPos = useRef(0);
    const prePos = useRef(0)
    const indexSlide = useRef(0)
    const [isDragging, setIsDragging] = useState(false);
    const [link, setLink] = useState(true);
    const [activePagination, setActivePagination] = useState(0)
    const [pagination, setPagination] = useState(null)

    const handleResize = () => {
        const width = window.innerWidth
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        trans.current = (0 - widthSilde / 10) * indexSlide.current
        if (0 - trans.current >= maxWidth) {
            trans.current = 0 - maxWidth
        }
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `none`
        if (width >= 618) {
            setPagination(5)
            setActivePagination(Math.floor(indexSlide.current / 2))
        } else {
            setPagination(10)
            setActivePagination(indexSlide.current)
        }
    }

    const handleClick = (index) => {
        const widthWrap = wrapRef.current.clientWidth
        trans.current = (0 - widthWrap) * index
        indexSlide.current = index * (10 / pagination)
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `all 0.8s ease`
        setActivePagination(index)
    }

    useEffect(() => {
        const width = window.innerWidth
        if (width >= 618) {
            setPagination(5)
        } else {
            setPagination(10)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const createArray = (length) => {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr.push(i)
        }
        return arr
    }

    const handleMouseDown = (e) => {
        e.preventDefault()
        const x = e.clientX
        startPos.current = x
        prePos.current = x
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) {
            return
        }
        e.preventDefault();
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
        console.log("mouse up");
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const x = e.clientX
        const distance = x - startPos.current
        if (distance == 0) {
            return
        }
        else if (Math.abs(distance) <= widthSilde / 10) {
            trans.current = trans.current - distance
            if (distance < 0) {
                trans.current -= widthSilde / 10
            }
            else {
                trans.current += widthSilde / 10
            }
        } else {
            trans.current = trans.current - distance
            if (distance < 0) {
                trans.current -= widthSilde / 5
            }
            else {
                trans.current += widthSilde / 5
            }
        }
        if (0 - trans.current >= maxWidth) {
            trans.current = 0 - maxWidth
        }
        if (trans.current > 0) {
            trans.current = 0
        }
        indexSlide.current = Math.round(Math.abs(trans.current * 10 / widthSilde))
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `all 0.2s ease`
        const index = Math.floor(Math.abs(trans.current / widthWrap) + 0.1)
        setActivePagination(index)
    };

    const handleTouchStart = (event) => {
        // Lấy vị trí chạm ban đầu
        const touchStartX = event.touches[0].clientX;
        startPos.current = touchStartX
        prePos.current = touchStartX
    };
    const handleTouchMove = (event) => {
        // Tính khoảng cách di chuyển so với vị trí chạm ban đầu
        // event.preventDefault();
        // setLink(false)
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
        }
        else if (Math.abs(distance) <= widthSilde / 10) {
            trans.current = trans.current - distance
            if (distance < 0) {
                trans.current -= widthSilde / 10
            }
            else {
                trans.current += widthSilde / 10
            }
        } else {
            trans.current = trans.current - distance
            if (distance < 0) {
                trans.current -= widthSilde / 5
            }
            else {
                trans.current += widthSilde / 5
            }
        }
        if (0 - trans.current >= maxWidth) {
            trans.current = 0 - maxWidth
        }
        if (trans.current > 0) {
            trans.current = 0
        }
        indexSlide.current = Math.round(Math.abs(trans.current * 10 / widthSilde))
        slideRef.current.style.transform = `translate3d(${trans.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `all 0.2s ease`
        const index = Math.floor(Math.abs(trans.current / widthWrap) + 0.1)
        setActivePagination(index)
    };


    return (
        <div className="SlideShow mb-6">
            <div ref={wrapRef} className="Wrap pt-28-pt overflow-hidden relative">
                <div
                    ref={slideRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="flex absolute h-full top-0 w-1000 md:w-500"
                >
                    {
                        data.map((film, index) => (
                            <div key={index} className="Item w-1/10">
                                <article className="p-2.5 h-full w-full">
                                    <div className="Image relative overflow-hidden h-full hover:scale-105 transition-transform duration-500">
                                        {link ?
                                            <>
                                                <a href={film.type == 'movies' ? `/phim-le/${film.url}`: `/phim-bo/${film.url}`}>
                                                    <Image className='w-full' src={film.urlImage500} width={500} height={281} alt={film.name} />
                                                    {/* <img className="w-full" src={film.urlImage500} alt={film.name} /> */}
                                                </a>
                                                <a href={film.type == 'movies' ? `/phim-le/${film.url}`: `/phim-bo/${film.url}`}>
                                                    <div className="bg-lnrgd w-full absolute bottom-0 text-white px-3.5 pb-2 pt-3.5">
                                                        <h3 className="text-base leading-4 font-medium truncate">{film.name}</h3>
                                                        <span className="text-xs leading-3 font-medium">{film.year}</span>
                                                    </div>
                                                </a>
                                            </>
                                            :
                                            <> 
                                                <div>
                                                    <Image className='w-full' src={film.urlImage500} width={500} height={281} alt={film.name} />
                                                    {/* <img className="w-full" src={film.urlImage500} alt={film.name} /> */}
                                                </div>
                                                <div>
                                                    <div className="bg-lnrgd w-full absolute bottom-0 text-white px-3.5 pb-2 pt-3.5">
                                                        <h3 className="text-base leading-4 font-medium truncate">{film.name}</h3>
                                                        <span className="text-xs leading-3 font-medium">{film.year}</span>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                        <div className="absolute bottom-0 right-0 text-white text-xs uppercase bg-blue-500 px-2.5 py-1">{film.sub}</div>
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="Click flex justify-center mt-2">
                <div className='flex flex-wrap'>
                    {
                        createArray(pagination).map((value, index) => {
                            if (index == activePagination) {
                                return (
                                    <div onClick={() => handleClick(index)} key={index} className='hover:cursor-pointer'>
                                        <div className='px-4 py-1 bg-white m-2 rounded'></div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div onClick={() => handleClick(index)} key={index} className='hover:cursor-pointer'>
                                        <div className='p-1 bg-white m-2 rounded'></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SlideShow