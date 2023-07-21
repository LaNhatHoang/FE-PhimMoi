import SlideTrend from "@/components/slide/SlideTrend"
import SlideShow from "@/components/slide/SlideShow"
import Title from '@/components/phim/Title'

const getPhimSlideShow = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/movies/ss/update/limit/10`)
    return res.json()
}
const getPhimTrend = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/movies/trend/limit/12`)
    return res.json()
}
export const revalidate = 1
const Layout = async({children})=>{
    const baseUrl = process.env.BASE_URL
    const phimSlideShow = await getPhimSlideShow(baseUrl)
    const phimTrend = await getPhimTrend(baseUrl)
    
    return (
        <div className="bg-p lg:flex-1 p-2.5 xnm:p-5">
            <Title title={"Phim lẻ"}/>
            <SlideShow data={phimSlideShow} />
            <SlideTrend countSlide={12} data={phimTrend} title={"Phim lẻ nổi bật"} />
            {children}
        </div>
    )
}

export default Layout