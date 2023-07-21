import PhimBo from '@/components/phimbo/PhimBo'

const getPhimBo = async (baseUrl, url) => {
    const res = await fetch(`${baseUrl}/tvshows/${url}`)
    return res.json()
}
const getPhimRandom = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/tvshows/random/limit/12`)
    return res.json()
}
export const revalidate = 1
const Page = async ({ params }) => {
    const baseUrl = process.env.BASE_URL
    const data = await getPhimBo(baseUrl, params.name)
    const phimRandom = await getPhimRandom(baseUrl)
    return (
        <PhimBo data={data} phimRandom={phimRandom} />
    )
}
export default Page