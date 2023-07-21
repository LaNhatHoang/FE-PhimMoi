import Image from 'next/image'
import SideBarItem from './SideBarItem'
import SideBarYear from './SideBarYear'

const getPhimBo = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/tvshows/limit/5`)
    return res.json()
}
const getPhimLe = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/movies/limit/5`)
    return res.json()
}
const getPhimRandom = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/random`)
    return res.json()
}
export const revalidate = 1
const SideBar = async () => {
    const baseUrl = process.env.BASE_URL
    const phimBo = await getPhimBo(baseUrl)
    const phimLe = await getPhimLe(baseUrl)
    const phimRandom = await getPhimRandom(baseUrl)

    return (
        <div className="bg-p border-l c-border lg:w-[22.5rem] lg:h-auto">
            <div className="p-[20px] lg:p-[30px]">
                <SideBarYear />
                <div className='Content mt-9 w-full sm:w-1/2 lg:w-full'>
                    <article className='group'>
                        <a href={phimRandom.type == 'movies' ? `/phim-le/${phimRandom.url}` : `/phim-bo/${phimRandom.url}`}>
                            <div style={{ paddingTop: '40%' }} className='Image relative overflow-hidden h-0'>
                                <Image 
                                    className='w-full absolute top-0 z-0 group-hover:blur-[1px] group-hover:brightness-90'
                                    src={phimRandom.urlImage} alt={phimRandom.name} width={500} height={281} 
                                />
                                {/* <img className='w-full absolute top-0 z-0 group-hover:blur-[1px] group-hover:brightness-90'
                                    src={phimRandom.urlImage} alt={phimRandom.name}
                                /> */}
                                <div className='absolute bottom-0 px-2.5 py-2 z-0 w-full'>
                                    <p className='text-white text-sm font-medium leading-4 truncate'>{phimRandom.name}</p>
                                    <p className='text-white text-sm'>{phimRandom.year}</p>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
                <div className='Content my-6 flex flex-wrap'>
                    <SideBarItem phimLe={phimLe} phimBo={phimBo} />
                </div>
            </div>
        </div>
    )
}

export default SideBar