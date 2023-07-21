import Pagination from '@/components/phim/Pagination'
import FormSearch from '@/components/search/FormSearch'
import HeaderSearch from '@/components/search/HeaderSearch'
import NoSearch from '@/components/search/NoSearch'
import Search from '@/components/search/Search'

const getPhim = async (baseUrl, searchValue) => {
    if (!searchValue) {
        searchValue = ""
    }
    const res = await fetch(`${baseUrl}/search/page/0/30?search=${searchValue}`)
    return res.json()
}

export const revalidate = 1

const Page = async ({ searchParams }) => {
    const baseUrl = process.env.BASE_URL
    const searchValue = searchParams.s
    const phim = await getPhim(baseUrl, searchValue)

    return (
        <div className="bg-p p-5 lg:flex-1 lg:px-10 2xl:py-10 2xl:px-24">
            <HeaderSearch header={`Kết quả tìm kiếm: ${searchValue}`} />
            <FormSearch value={searchValue} />
            {
                phim.content.length == 0 ? <NoSearch value={searchValue} />
                :
                <>
                    <Search data={phim.content} />
                    {phim.totalPages > 1 ? 
                        <Pagination url={`/search`} param={`?s=${searchValue}`} current={phim.number + 1} total={phim.totalPages} /> 
                        : <></>
                    }
                </>
            }


        </div>
    )
}
export default Page