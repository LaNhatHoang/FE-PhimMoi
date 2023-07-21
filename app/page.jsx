import SlideTrend from "@/components/slide/SlideTrend";
import SlideFilm from "@/components/slide/SlideFilm";
import SlideShow from "@/components/slide/SlideShow";
import NewsList from "@/components/phim/NewsList";

const getPhimSlideShow = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/movies/ss/update/limit/10`)
    return res.json()
}
const getPhimTrend = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/trend/limit/15`)
    return res.json()
}
const getPhimRap = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/category/phimchieurap/limit/10`)
    return res.json()
}
const getPhimLeUpdate = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/movies/update/limit/15`)
    return res.json()
}
const getPhimBoUpdate = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/tvshows/update/limit/15`)
    return res.json()
}
const getNews = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/blog/limit/5`)
    return res.json()
}
// second time re cache data
export const revalidate = 1

const Home = async () => {
    const baseUrl = process.env.BASE_URL
    const phimSlideShow = await getPhimSlideShow(baseUrl)
    const phimTrend = await getPhimTrend(baseUrl)
    const phimRap = await getPhimRap(baseUrl)
    const phimLeUpdate = await getPhimLeUpdate(baseUrl)
    const phimBoUpdate = await getPhimBoUpdate(baseUrl)
    const news = await getNews(baseUrl)
    return (
        <div className="bg-p lg:flex-1 p-2.5 xnm:p-5">
            <SlideShow data={phimSlideShow} />
            <SlideTrend countSlide={15} data={phimTrend} title={"Phim mới nổi bật"} />
            <SlideFilm countSlide={10} data={phimRap} url={"/the-loai/phim-chieu-rap"} title={"Phim chiếu rạp mới cập nhật"} />
            <SlideFilm countSlide={15} data={phimBoUpdate} url={"/phim-bo"} title={"Phim bộ mới cập nhật"} />
            <SlideFilm countSlide={15} data={phimLeUpdate} url={"/phim-le"} title={"Phim lẻ mới cập nhật"} />
            <NewsList data={news} />
        </div>
    )
}
export default Home