import Table from '@/components/phim/Table'
import SlideTrend from "@/components/slide/SlideTrend"
import SlideShow from "@/components/slide/SlideShow"
import Title from '@/components/phim/Title'
import Pagination from '@/components/phim/Pagination';

const getPhimSlideShow = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/tvshows/ss/update/limit/10`)
    return res.json()
}
const getPhimTrend = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/tvshows/trend/limit/12`)
    return res.json()
}
const getPhimBo = async(baseUrl)=>{
    const res = await fetch(`${baseUrl}/tvshows/page/0/30`)
    return res.json()
}
export const revalidate = 1
const Page = async()=>{
    const baseUrl = process.env.BASE_URL
    const phimSlideShow = await getPhimSlideShow(baseUrl)
    const phimTrend = await getPhimTrend(baseUrl)
    const phimBo = await getPhimBo(baseUrl)

    return(
        <div className="bg-p lg:flex-1 p-2.5 xnm:p-5">
            <Title title={"Phim bộ"}/>
            <SlideShow data={phimSlideShow} />
            <SlideTrend countSlide={12} data={phimTrend} title={"Phim bộ nổi bật"} />
            <Table data={phimBo.content} title={"Phim bộ mới cập nhập"} />
            { phimBo.totalPages > 1 ? <Pagination url={"/phim-bo"} current={phimBo.number +1} total={phimBo.totalPages} /> : <></>}
        </div>
    )
}
export default Page