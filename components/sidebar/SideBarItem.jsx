import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

const SideBarItem = (props) => {
    const { phimLe, phimBo } = props
    return (
        <>
            {
                phimBo.map((film, index) => (
                    <article key={index} className='mt-2.5 w-full sm:w-1/2 lg:w-full relative h-[90px] bg-art overflow-hidden hover:bg-black group'>
                        <a href={`/phim-bo/${film.url}`} className='h-full'>
                            <div className='Image w-20 absolute'>
                                <Image className='w-full' src={`/api/image/${film.urlImage}`} alt={film.name} width={185} height={278} />
                                {/* <img className='w-full' src={`/api/image/${film.urlImage}`} alt={film.name} /> */}
                            </div>
                            <div className='Data ms-20 p-2.5'>
                                <div
                                    className=' text-l text-sm font-medium line-clamp-1'>
                                    {film.name}
                                </div>
                                <div className='flex items-center flex-wrap mt-1 text-p text-xs font-medium'>
                                    <div className='px-1.5 py-0.5 flex border rounded border-stone-600'>
                                        <AiFillStar className='group-hover:text-blue-500 text-base me-1' />
                                        <p>{film.star}</p>
                                    </div>
                                    <span className='ms-1.5'>{film.year}</span>
                                </div>
                            </div>
                        </a>
                    </article>
                ))
            }
            {
                phimLe.map((film, index) => (
                    <article key={index} className='mt-2.5 w-full sm:w-1/2 lg:w-full relative h-[90px] bg-art overflow-hidden hover:bg-black group'>
                        <a href={`/phim-le/${film.url}`} className=''>
                            <div className='Image w-20 absolute'>
                                <Image className='w-full' src={`/api/image/${film.urlImage}`} alt={film.name} width={185} height={278} />
                                {/* <img className='w-full' src={`/api/image/${film.urlImage}`} alt={film.name} /> */}
                            </div>
                            <div className='Data ms-20 p-2.5 overflow-hidden'>
                                <div
                                    className=' text-l text-sm font-medium line-clamp-1'>
                                    {film.name}
                                </div>
                                <div className='flex items-center flex-wrap mt-1 text-p text-xs font-medium'>
                                    <div className='px-1.5 py-0.5 flex border rounded border-stone-600'>
                                        <AiFillStar className='group-hover:text-blue-500 text-base me-1' />
                                        <p>{film.star}</p>
                                    </div>
                                    <span className='ms-1.5'>{film.year}</span>
                                </div>
                            </div>
                        </a>
                    </article>
                ))
            }
        </>
    )
}
export default SideBarItem
