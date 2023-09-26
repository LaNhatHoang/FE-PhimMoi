import Pagination from '@/components/phim/Pagination'
import FormSearch from '@/components/search/FormSearch'
import HeaderSearch from '@/components/search/HeaderSearch'
import Search from '@/components/search/Search'
import { redirect } from 'next/navigation'

const getPhim = async (baseUrl, searchValue, idPage) => {
    if (!searchValue) {
        searchValue = ""
    }
    try {
        const res = await fetch(`${baseUrl}/search/page/${idPage}/30?search=${searchValue}`)
        return res.json()
    } catch (err) {
        return
    }
}

export const revalidate = 1

const Page = async ({ params, searchParams }) => {
    const baseUrl = process.env.BASE_URL
    const searchValue = searchParams.s
    const idPage = params.id
    if (idPage == '1') {
        redirect(`/search?s=${searchValue}`)
    }
    const phim = await getPhim(baseUrl, searchValue, Number(idPage) - 1)

    return (
        <div className="bg-p p-5 lg:flex-1 lg:px-10 2xl:py-10 2xl:px-24">
            <HeaderSearch header={`Kết quả tìm kiếm: ${searchValue}`} />
            <FormSearch value={searchValue} />
            <Search data={phim.content} />
            {phim.totalPages > 1 ? <Pagination url={`/search`} param={`?s=${searchValue}`} current={phim.number + 1} total={phim.totalPages} /> : <></>}
        </div>
    )
}
export default Page