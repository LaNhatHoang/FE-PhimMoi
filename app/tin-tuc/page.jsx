import Image from "next/image"
import { CgProfile } from 'react-icons/cg'

const getNews = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/blog/all`)
    return res.json()
}
export const revalidate = 1
const Page = async () => {
    const baseUrl = process.env.BASE_URL
    const data = await getNews(baseUrl)

    return (
        <div className="p-5 flex lg:flex-1 flex-col bg-p">
            <header className="px-2.5 xnm:px-0 lg:px-2.5 py-2.5 overflow-hidden">
                <h2 className="pl-2.5 border-l-[3px] border-blue-500 text-white text-xl font-semibold lg:leading-5">Tin tức</h2>
            </header>
            <div className="flex flex-wrap">
                {
                    data.map((item, index) => (
                        <div key={index} className="p-5 sm:w-1/2 2xl:w-1/3">
                            <article>
                                <a className="" href={`/tin-tuc/${item.url}`}>
                                    <div className="pt-56-pt relative group overflow-hidden">
                                        <Image 
                                            className="absolute top-0 left-0 w-full" src={"/dt_backdrop.png"} 
                                            alt={item.name} width={400} height={225} 
                                        />
                                    </div>
                                </a>
                                <div className="py-2">
                                    <a href={`/tin-tuc/${item.url}`}>
                                        <h2 className="text-lg font-semibold text-white line-clamp-1">{item.name}</h2>
                                    </a>
                                    <div className="py-1 flex items-center flex-wrap text-[13px] text-blue-500 font-semibold">
                                        <CgProfile className="me-1 text-sm" />
                                        <span className="mr-2.5 text-xs">Admin</span>
                                        <span className="text-zinc-600 italic">March 5, 2023</span>
                                    </div>
                                    <p className="text-sm text-p line-clamp-3">{item.description}</p>
                                </div>
                            </article>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Page