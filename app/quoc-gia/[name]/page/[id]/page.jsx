import Table from "@/components/phim/Table";
import Title from "@/components/phim/Title";
import Pagination from '@/components/phim/Pagination';
import { redirect } from "next/navigation";
const transliteration = require('transliteration');

const normalizeVietnamese = (text)=> {
    return transliteration.transliterate(text);
}
const getNameCountry = (paramName, countrys)=>{
    for(let i=0;i<countrys.length;i++){
        if(normalizeVietnamese(countrys[i]).replace(/\s+/g, '-').toLowerCase() == paramName){
            return countrys[i]
        }
    }
    return null
}
const getPhim = async(baseUrl, country, idPage)=>{
    country = country.substring(5).replaceAll("-", "")
    const res = await fetch(`${baseUrl}/legion/${country}/page/${idPage}/30`)
    return res.json()
}
export const revalidate = 1
const Page = async({params})=>{ 
    const paramName = decodeURIComponent(params.name)
    const baseUrl = process.env.BASE_URL
    if(params.id=='1'){
        redirect(`/quoc-gia/${paramName}`)
    }
    const phim = await getPhim(baseUrl,paramName, Number(params.id) -1)
    const countrys = [
        "Phim Âu Mỹ", "Phim Hàn Quốc", "Phim Trung Quốc", "Phim Nhật Bản", "Phim Đài Loan", "Phim Hồng Kông",
        "Phim Thái Lan", "Phim Ấn Độ", "Phim Philippines", "Phim Việt Nam", "Phim Indonesia", "Phim Singapore"
    ]
    const nameCountry = getNameCountry(paramName, countrys)
    return(
        <div className="bg-p lg:flex-1 p-2.5 xnm:p-5">
            <Title title={nameCountry}/>
            <Table data={phim.content} title={`${nameCountry} mới cập nhập`} />
            { phim.totalPages > 1 ? <Pagination url={`/quoc-gia/${paramName}`} current={phim.number +1} total={phim.totalPages} /> : <></>}
        </div>
    )
}
export default Page