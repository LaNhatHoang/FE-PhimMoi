import Pagination from "@/components/phim/Pagination"
import Table from "@/components/phim/Table"
import Title from "@/components/phim/Title"
import { redirect } from "next/navigation"

const getPhim = async(baseUrl, year, idPage)=>{
    const res = await fetch(`${baseUrl}/year/${year}/page/${idPage}/30`)
    return res.json()
}
export const revalidate = 1
const Page = async({params})=>{
    const year = params.year
    const baseUrl = process.env.BASE_URL
    if(params.id=='1'){
        redirect(`/nam-phat-hanh/${year}`)
    }
    const phim = await getPhim(baseUrl, year, Number(params.id) -1)

    return(
        <div className="bg-p lg:flex-1 p-2.5 xnm:p-5">
            <Title title={year} />
            <Table data={phim.content} title={`${year} mới cập nhập`} />
            { phim.totalPages > 1 ? <Pagination url={`/nam-phat-hanh/${year}`} current={phim.number +1} total={phim.totalPages}/> : <></>}
        </div>
    )
}
export default Page