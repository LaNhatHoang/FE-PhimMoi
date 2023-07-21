import Info from "@/components/phimle/Info"
import Movie from "@/components/phim/Movie"
import Poster from "@/components/phim/Poster"
import Share from "@/components/phim/Share"
import SlideRandom from "@/components/slide/SlideRandom"
import Path from "@/components/phim/Path"
const transliteration = require('transliteration');

function normalizeVietnamese(text) {
  return transliteration.transliterate(text);
}
const getPhimLe = async (baseUrl, url) => {
    const res = await fetch(`${baseUrl}/movies/${url}`)
    return res.json()
}
const getPhimRandom = async (baseUrl) => {
    const res = await fetch(`${baseUrl}/movies/random/limit/12`)
    return res.json()
}
export const revalidate = 1
const Page = async ({ params }) => {
    const baseUrl = process.env.BASE_URL
    const data = await getPhimLe(baseUrl, params.name)
    const phimRandom = await getPhimRandom(baseUrl)
    return (
        <div className="bg-p lg:flex-1">
            <Path type={"Phim lẻ"} url={"/phim-le"} name={data.name} />
            <Movie server={data.servers} />
            <Poster
                name={data.name} nameEng={data.nameEng} urlImage={data.urlImage} createAt={data.createAt}
                categorys={data.categorys} normalizeVietnamese={normalizeVietnamese} star={data.star}
                time={data.time} country={data.country} rated={data.rated} review={data.review}
            />
            <Info descriptions={data.descriptions} directors={data.directors} actors={data.actors} urlTrailer={data.urlTrailer} />
            <Share share={data.share} />
            <SlideRandom data={phimRandom} />
        </div>
    )
}

export default Page