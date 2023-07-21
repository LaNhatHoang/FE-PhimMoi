'use client'
import Share from "@/components/phim/Share"
import SlideRandom from "@/components/slide/SlideRandom"
import Path from '@/components/phim/Path'
import Poster from '@/components/phim/Poster'
import Info from '@/components/phimbo/Info'
import { useState } from "react"
import PathP from "./PathP"
import Description from "../phim/Description"
import Actor from "../phim/Actor"
import SelectPart from "./SelectPart"
import Movie from "../phim/Movie"
import Track from "./Track"
const transliteration = require('transliteration');

function normalizeVietnamese(text) {
    return transliteration.transliterate(text);
}

const PhimBo = ({ data, phimRandom }) => {
    const [part, setPart] = useState(null)
    const [isPart, setIsPart] = useState(true)
    const [indexPart, setIndexPart] = useState(null)
    const [isDescription, setIsDescription] = useState(false)
    const [isActor, setIsActor] = useState(false)

    return (
        <div className="bg-p lg:flex-1">
            {part ?
                <>
                    <PathP url={data.url} name={data.name} namePart={part.name} />
                    <Movie server={part.servers} />
                    <Track parts={data.parts} indexPart={indexPart} setIndexPart={setIndexPart} setPart={setPart} />
                </>
                :
                <>
                    <Path type={"Phim bộ"} url={"/phim-bo"} name={data.name} />
                    <Poster
                        name={data.name} nameEng={data.nameEng} urlImage={data.urlImage} createAt={data.createAt}
                        categorys={data.categorys} normalizeVietnamese={normalizeVietnamese} star={data.star}
                        sub={data.sub} review={data.review}
                    />
                    <Info
                        isPart={isPart} setIsPart={setIsPart}
                        isDescription={isDescription} setIsDescription={setIsDescription}
                        isActor={isActor} setIsActor={setIsActor}
                    />
                </>
            }
            {isPart ? <SelectPart parts={data.parts} part={part} setPart={setPart} setIndexPart={setIndexPart} /> : <></>}
            {isDescription ? <Description header={"Tóm tắt"} descriptions={data.descriptions} /> : <></>}
            {isActor ? <Actor creator={"Creator"} directors={data.directors} actors={data.actors} /> : <></>}
            {part ? <Description header={`${data.name} ${part.name}`} descriptions={data.descriptions} /> : <></>}
            <Share share={data.share} />
            <SlideRandom data={phimRandom} />
        </div>
    )
}
export default PhimBo