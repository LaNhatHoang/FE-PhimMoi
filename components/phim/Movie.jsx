'use client'
import { FaPlayCircle } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Movie = ({ server }) => {
    const [indexServer, setIndexServer] = useState(0)
    const [url, setUrl] = useState(server[0]?.url)
    const handelClick = (index, url) => {
        setIndexServer(index)
        setUrl(url)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    useEffect(() => {
        setUrl(server[0]?.url)
        setIndexServer(0)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [server])

    return (
        <div className='Play'>
            {
                url ?
                    <>
                        <div className='Container lg:p-5 bg-black'>
                            <div className='Frame relative pt-56-pt over-flow-hidden'>
                                <iframe
                                    className='absolute top-0 left-0 w-full h-full'
                                    src={url}
                                    frameBorder="0"
                                    // allow='autoplay; encrypted-media'
                                    // allowTransparency='true'
                                    allowFullScreen={true}
                                    scrolling='no'
                                ></iframe>
                            </div>
                        </div>
                        <div className='flex px-5 py-4 justify-between border-b c-border' style={{ background: 'rgba(0,0,0,.7)' }}>
                            <div className='text-white text-lg font-medium'>Chọn server</div>
                            <div className='text-xs font-medium text-blue-500 flex items-center'>
                                <span className='px-2 py-1 border border-stone-600 rounded'>Report Error</span>
                            </div>
                        </div>
                        <div className='Server px-[25px]' style={{ background: 'rgba(0,0,0,.5)' }}>
                            <ul className='py-[25px]'>
                                {
                                    server.map((server, index) => (
                                        index == indexServer
                                            ?
                                            <li key={index} style={{ background: 'rgba(255,255,255,.1)' }} className='flex p-[15px] hover:cursor-pointer group'>
                                                <FaPlayCircle className='text-xl text-white me-[15px]' />
                                                <span className='text-sm font-semibold text-white group-hover:text-blue-500'>{server.name}</span>
                                            </li>
                                            :
                                            <li onClick={() => handelClick(index, server.url)} key={index} className='flex p-[15px] hover:cursor-pointer group'>
                                                <FaPlayCircle style={{ color: 'rgba(255,255,255,.3)' }} className='text-xl text-white me-[15px]' />
                                                <span className='text-sm font-semibold text-white group-hover:text-blue-500'>{server.name}</span>
                                            </li>
                                    ))
                                }
                            </ul>
                            <div className='pb-[15px] text-amber-500 text-sm'>Vui lòng đổi server khác nếu phim bị lỗi nhé !</div>
                        </div>
                    </>
                    :
                    <div className='no-video relative pt-56-pt'>
                        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                            <div className='video-update text-white'>Đang cập nhập...</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Movie