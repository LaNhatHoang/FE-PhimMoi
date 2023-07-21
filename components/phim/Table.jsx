import Image from 'next/image'

const Table = (props) => {
    const {title, data} = props
    return (
        <div className="Table mb-[25px]">
            <header className="px-2.5 py-3.5 flex items-center justify-between">
                <h2 className="pl-2.5 border-l-[3px] border-blue-500 text-white text-xl font-semibold">{title}</h2>
            </header>
            <div className='overflow-hidden border-b c-border'>
                {
                    data.map((film, index) => (
                        <article key={index} className='p-[5px] md:p-2.5 w-1/3 nm:w-1/4 lg:w-1/3 xl:w-1/4 3xl:w-1/5 float-left'>
                            <div style={{ paddingTop: '140%' }} className="Poster relative overflow-hidden">
                                <Image className='absolute top-0 w-full' src={`/api/image/${film[2]}`} alt={film[0]} width={185} height={278}/>
                                {/* <img className='absolute top-0 w-full' src={`/api/image/${film[2]}`} alt={film[0]} /> */}
                                <div className='px-2.5 py-0.5 bottom-[5px] left-[5px] text-[10px] uppercase text-white font-medium absolute bottom-0 bg-blue-500'
                                >{film[3]}</div>
                                <a href={film[5] == 'movies' ? `/phim-le/${film[4]}`: `/phim-bo/${film[4]}`}>
                                    <div className='absolute z-20 top-0 w-full h-full flex items-center justify-center'>
                                        <Image className='Play w-1/3 opacity-0 scale-1.2' src='/play1.png' alt='' width='50' height='50' />
                                    </div>
                                </a>
                            </div>
                            <div className="Data mt-3.5 mb-2.5">
                                <h3 className='text-white text-sm font-medium line-clamp-1 hover:text-blue-500'>
                                    <a href={film[5] == 'movies' ? `/phim-le/${film[4]}`: `/phim-bo/${film[4]}`}>{film[0]}</a>
                                </h3>
                                <h3 className='mt-0.5 text-p text-xs font-medium line-clamp-1'>{film[1]}</h3>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}

export default Table