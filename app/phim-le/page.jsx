import Table from '@/components/phim/Table'
import SlideTrend from "@/components/slide/SlideTrend"
import SlideShow from "@/components/slide/SlideShow"
import Title from '@/components/phim/Title'
import Pagination from '@/components/phim/Pagination';

const getPhimSlideShow = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/movies/ss/update/limit/10`)
    return res.json()
}
const getPhimTrend = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/movies/trend/limit/12`)
    return res.json()
}
const getPhimLe = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/movies/page/0/30`)
    return res.json()
}
export const revalidate = 1
const Page = async() => {
    const baseUrl = process.env.BASE_URL
    const phimSlideShow = await getPhimSlideShow(baseUrl)
    const phimTrend = await getPhimTrend(baseUrl)
    const phimLe = await getPhimLe(baseUrl)
    
    return (
        <div className="bg-p lg:flex-1 p-2.5 xnm:p-5">
            <Title title={"Phim lẻ"}/>
            <SlideShow data={phimSlideShow} />
            <SlideTrend countSlide={12} data={phimTrend} title={"Phim lẻ nổi bật"} />
            <Table data={phimLe.content} title={"Phim lẻ mới cập nhập"} />
            { phimLe.totalPages >1 ? <Pagination url={"/phim-le"} current={phimLe.number +1} total={phimLe.totalPages} /> : <></>}
        </div>
    )
}

export default Page