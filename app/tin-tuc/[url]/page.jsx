import { CgProfile } from 'react-icons/cg'
import MarkdownIt from 'markdown-it'
import Share from '@/components/phim/Share'

const getNews = async(baseUrl, url)=>{
    const res = await fetch(`${baseUrl}/blog/${url}`)
    return res.json()
}

export const revalidate = 1

const Page = async ({ params }) => {
    const baseUrl = process.env.BASE_URL
    const news = await getNews(baseUrl, params.url)
    const md = new MarkdownIt()
    const html = md.render(news.content)

    return (
        <div className="bg-p lg:flex-1">
            <div className="py-5 px-5 xnm:px-12 border-b c-border">
                <header className="pb-4 border-b c-border">
                    <h1 className="text-3xl font-medium text-white">{news.name}</h1>
                </header>
                <div className="mb-5 py-4 border-b c-border flex items-center flex-wrap text-sm text-p font-medium">
                    <CgProfile className="me-1 text-blue-500 text-base" />
                    <span className="mr-2.5">Admin</span>
                    <span>March 5, 2023</span>
                </div>
                <div className='text-p wp-content' dangerouslySetInnerHTML={{__html: html}}></div>
                <div className='px-4 overflow-hidden'>
                    <div className='px-2.5 py-1 float-left text-xs uppercase text-p border-r c-border'>Danh mục</div>
                    <div className='ms-3 float-left text-sm text-blue-500 leading-6'>
                        <a href="/tin-tuc">Tin tức</a>
                    </div>
                </div>
            </div>
            <Share share={18} />
        </div>
    )
}
export default Page