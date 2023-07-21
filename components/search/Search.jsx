import Image from "next/image"

const Search = ({ data }) => {
    return (
        <>
            {
                data.map((film, index) => (
                    <div key={index} className={index == data.length - 1 ? `mb-7` : ""}>
                        <article className='pl-28 sm:pl-32 py-[15px] relative border-b c-border group'>
                            <div className='image absolute left-0 w-[90px] h-[135px] sm:w-[110px] sm:h-[110px] overflow-hidden'>
                                <div className='relative'>
                                    <a href={ film[5]=="movies" ? `/phim-le/${film[4]}` : `/phim-bo/${film[4]}`}>
                                        <Image 
                                            className='w-full group-hover:blur-[1px] group-hover:brightness-90' 
                                            src={`/api/image/${film[3]}`} alt={film[0]} width={185} height={278}
                                        />
                                        {/* <img className='w-full group-hover:blur-[1px] group-hover:brightness-90' src={`/api/image/${film[3]}`} alt={film[0]} /> */}
                                        { film[5] == 'movies' ?
                                            <span className='absolute px-1.5 top-0 right-0 text-white text-[10px] font-medium bg-lime-600'>Phim lẻ</span>
                                            :
                                            <span className='absolute px-1 top-0 right-0 text-white text-[10px] font-medium bg-red'>Phim bộ</span>
                                        }
                                    </a>
                                </div>
                            </div>
                            <div className='data text-p'>
                                <div className='mb-1 text-[15px] leading-5 font-medium hover:text-white'>
                                    <a href={ film[5]=="movies" ? `/phim-le/${film[4]}` : `/phim-bo/${film[4]}`}>{film[0]}</a>
                                </div>
                                <div className='mb-1.5 text-sm font-medium'>
                                    <span>{film[1]}</span>
                                </div>
                                <div className='text-[13px] font-light line-clamp-5 sm:line-clamp-3'>
                                    <p className='leading-[18px]'>{film[2]}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                ))
            }
        </>
    )
}
export default Search