'use client'
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const SlideRandom = ({data}) => {
    const slideRef = useRef(null)
    const wrapRef = useRef(null)
    const tranX = useRef(0)
    const startX = useRef(0)
    const preX = useRef(0)
    const indexSlide = useRef(0)
    const [isDragging, setIsDragging] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [link, setLink] = useState(true)

    const getCountSlideWrap = (width) => {
        if (width < 500) {
            // no response
            return 3
        }
        else if (width < 930) {
            //nm
            return 5
        }
        else {
            //xl
            return 6
        }
    }

    const handleResize = () => {
        const widthWrap = wrapRef.current.getBoundingClientRect().width
        const countSlideWrap = getCountSlideWrap(window.innerWidth)
        const maxWidth = (12 - countSlideWrap) * (widthWrap / countSlideWrap)
        tranX.current = (0 - widthWrap / countSlideWrap) * indexSlide.current
        if (0 - tranX.current >= maxWidth) {
            tranX.current = 0 - maxWidth
            indexSlide.current = Math.round(maxWidth * countSlideWrap / widthWrap)
        }
        slideRef.current.style.transform = `translate3d(${tranX.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `none`
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHover) {
                indexSlide.current +=1
                const widthWrap = wrapRef.current.getBoundingClientRect().width
                const countSlideWrap = getCountSlideWrap(window.innerWidth)
                if(indexSlide.current > 12 - countSlideWrap){
                    indexSlide.current = 0
                }
                tranX.current = indexSlide.current * ( 0 - widthWrap / countSlideWrap)
                slideRef.current.style.transform = `translate3d(${tranX.current}px, 0px, 0px)`;
                slideRef.current.style.transition = `all 0.8s ease`
            }
        }, 3000)

        return () => {
            clearInterval(interval);
        };
    }, [isHover])

    const handleMouseDown = (e) => {
        e.preventDefault()
        const x = e.clientX
        startX.current = x
        preX.current = x
        setIsDragging(true)
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
        const distance = e.clientX - preX.current;
        if(tranX.current+distance>0 || tranX.current+distance< 0-maxWidth){
            tranX.current = tranX.current + distance/5
        }
        else{
            tranX.current = tranX.current + distance;
        }
        preX.current = e.clientX;
        slideRef.current.style.transform = `translate3d(${tranX.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `none`
    }
    const handleMouseUp = (e) => {
        setIsHover(false)
        if (!isDragging) {
            return
        }
        e.preventDefault()
        setIsDragging(false)
        setLink(true)
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const x = e.clientX
        const distance = x - startX.current
        if (distance == 0) {
            return
        } else {
            const count = Math.ceil(Math.abs(distance) * 12 / widthSilde)
            tranX.current = tranX.current - distance
            if (distance < 0) {
                tranX.current -= count * widthSilde / 12
            }
            else {
                tranX.current += count * widthSilde / 12
            }
        }
        if (0 - tranX.current >= maxWidth) {
            tranX.current = 0 - maxWidth
        }
        if (tranX.current > 0) {
            tranX.current = 0
        }
        indexSlide.current = Math.round(Math.abs(tranX.current * 12 / widthSilde))
        slideRef.current.style.transform = `translate3d(${tranX.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `all 0.2s ease`
    }
    const handleTouchStart = (event) => {
        const touchStartX = event.touches[0].clientX;
        startX.current = touchStartX
        preX.current = touchStartX
        setIsHover(true)
    };
    const handleTouchMove = (event) => {
        // event.preventDefault();
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const distance = event.touches[0].clientX - preX.current;
        if(tranX.current+distance>0 || tranX.current+distance< 0-maxWidth){
            tranX.current = tranX.current + distance/5
        }
        else{
            tranX.current = tranX.current + distance;
        }
        preX.current = event.touches[0].clientX;
        slideRef.current.style.transform = `translate3d(${tranX.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `none`
    };
    const handleTouchEnd = (event) => {
        // Loại bỏ các sự kiện lắng nghe khi kết thúc chạm vuốt
        setIsHover(false)
        const widthSilde = slideRef.current.getBoundingClientRect().width
        const widthWrap = wrapRef.current.clientWidth
        const maxWidth = widthSilde - widthWrap
        const x = event.changedTouches[0].clientX
        const distance = x - startX.current
        if (distance == 0) {
            return
        } else {
            const count = Math.ceil(Math.abs(distance) * 12 / widthSilde)
            tranX.current = tranX.current - distance
            if (distance < 0) {
                tranX.current -= count * widthSilde / 12
            }
            else {
                tranX.current += count * widthSilde / 12
            }
        }
        if (0 - tranX.current >= maxWidth) {
            tranX.current = 0 - maxWidth
        }
        if (tranX.current > 0) {
            tranX.current = 0
        }
        indexSlide.current = Math.round(Math.abs(tranX.current * 12 / widthSilde))
        slideRef.current.style.transform = `translate3d(${tranX.current}px, 0px, 0px)`;
        slideRef.current.style.transition = `all 0.2s ease`
    };
    return (
        <div className="Slide random py-5 px-[30px]">
            <h2 className="mb-1.5 pb-3 text-lg font-medium text-white">Phim mới</h2>
            <div
                ref={wrapRef}
                onMouseEnter={()=>setIsHover(true)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="Wrap overflow-hidden">
                <div
                    ref={slideRef}
                    className="Content w-400 nm:w-240 xl:w-200">
                    {
                        data.map((film, index) => (
                            <div key={index} className="float-left w-1/12">
                                <article className="p-2.5 relative hover:cursor-pointer">
                                    <Image className="w-full" src={`/api/image/${film.urlImage}`} alt={film.name} width={185} height={278}/>
                                    {/* <img src={`/api/image/${film.urlImage}`} alt={film.name} /> */}
                                    {link ?
                                        <a href={film.type == 'movies' ? `/phim-le/${film.url}` : `/phim-bo/${film.url}`}
                                            className="absolute top-0 left-0 w-full h-full"
                                        >
                                        </a>
                                        :
                                        <div></div>
                                    }
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default SlideRandom