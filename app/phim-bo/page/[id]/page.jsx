import Table from "@/components/phim/Table"
import Pagination from '@/components/phim/Pagination';
import { redirect } from 'next/navigation';

const getPhimBo = async (baseUrl, idPage) => {
    const res = await fetch(`${baseUrl}/tvshows/page/${idPage}/30`)
    return res.json()
}
export const revalidate = 1
const Page = async ({ params }) => {
    const baseUrl = process.env.BASE_URL
    if(params.id == '1'){
        redirect('/phim-bo')
    }
    const phimBo = await getPhimBo(baseUrl, Number(params.id) - 1)

    return (
        <>
            <Table data={phimBo.content} title={"Phim bộ mới cập nhập"} />
            { phimBo.totalPages > 1 ? <Pagination url={"/phim-bo"} current={phimBo.number + 1} total={phimBo.totalPages} /> : <></>}
        </>
    )
}
export default Page