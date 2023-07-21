import Table from "@/components/phim/Table"
import Pagination from '@/components/phim/Pagination';
import { redirect } from "next/navigation";

const getPhimLe = async (baseUrl, idPage) => {
    const res = await fetch(`${baseUrl}/movies/page/${idPage}/30`)
    return res.json()
}
export const revalidate = 1
const Page = async ({ params }) => {
    const baseUrl = process.env.BASE_URL
    if(params.id=='1'){
        redirect("/phim-le")
    }
    const phimLe = await getPhimLe(baseUrl, Number(params.id) - 1)

    return (
        <>
            <Table data={phimLe.content} title={"Phim lẻ mới cập nhập"} />
            { phimLe.totalPages > 1 ? <Pagination url={"/phim-le"} current={phimLe.number + 1} total={phimLe.totalPages} /> : <></>}
        </>
    )
}
export default Page