import Table from "@/components/phim/Table";
import Title from "@/components/phim/Title";
import Pagination from '@/components/phim/Pagination';
const transliteration = require('transliteration');

const normalizeVietnamese = (text)=> {
    return transliteration.transliterate(text);
}
const getNameCategory = (paramName, categorys)=>{
    for(let i=0;i<categorys.length;i++){
        if(normalizeVietnamese(categorys[i]).replace(/\s+/g, '-').toLowerCase() == paramName){
            return categorys[i]
        }
    }
    return null
}
const getPhim = async(baseUrl, paramName)=>{
    const ctg = paramName.replaceAll("-", "")
    const res = await fetch(`${baseUrl}/category/${ctg}/page/0/30`)
    return res.json()
}
export const revalidate = 1
const Page = async({params})=>{ 
    const paramName = decodeURIComponent(params.name)
    const baseUrl = process.env.BASE_URL
    const phim = await getPhim(baseUrl,paramName)
    const categorys = [
        "Phim Chiếu Rạp", "Phim Cổ Trang", "Phim Tâm Lý", "Phim Tình Cảm", "Phim Bí Ẩn", "Phim Kinh Dị", "Phim Hành Động", "Phim Võ Thuật",
        "Phim Kịch Tính", "Phim Chiến Tranh", "Phim Phiêu Lưu", "Phim Hài", "Phim BL", "Phim 18+", "Phim Hình Sự", "Phim Gia Đình",
        "Phim Khoa Học", "Phim Viễn Tưởng", "Phim Netflix", "Phim Âm Nhạc", "Phim Thần Thoại", "Phim Hoạt Hình", "Phim Chính Kịch", "TV Shows"
    ]
    const nameCategory = getNameCategory(paramName, categorys)
    return(
        <div className="bg-p lg:flex-1 p-2.5 xnm:p-5">
            <Title title={nameCategory}/>
            <Table data={phim.content} title={`${nameCategory} mới cập nhập`} />
            { phim.totalPages > 1 ? <Pagination url={`/the-loai/${paramName}`} current={phim.number +1} total={phim.totalPages} /> : <></>}
        </div>
    )
}
export default Page