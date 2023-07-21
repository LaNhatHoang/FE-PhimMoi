'use client'
import { useState } from "react"
import Actor from "../phim/Actor"
import Trailer from "../phim/Trailer"
import Description from "../phim/Description"

const Info = ({descriptions, directors, actors, urlTrailer}) => {
    const [isDescription, setIsDescription] = useState(true)
    const [isActor, setIsActor] = useState(false)
    const [isTrailer, setIsTrailer] = useState(false)

    const handleDescreption = () => {
        setIsDescription(true)
        setIsActor(false)
        setIsTrailer(false)
    }
    const handleActor = () => {
        setIsDescription(false)
        setIsActor(true)
        setIsTrailer(false)
    }
    const handleTrailer = () => {
        setIsDescription(false)
        setIsActor(false)
        setIsTrailer(true)
    }
   
    return (
        <div className="Info block">
            <div className="border-b-2 c-border">
                <ul className="p-2.5 xnm:px-6 bg-art xnm:bg-inherit overflow-hidden">
                    {
                        isDescription ?
                            <li onClick={handleDescreption} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                                <a className="bg-blue-500 w-full float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Thông tin</a>
                            </li>
                            :
                            <li onClick={handleDescreption} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                                <a className="w-full bg-info xnm:bg-inherit hover:text-blue-500 float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Thông tin</a>
                            </li>
                    }
                    {
                        isActor ?
                            <li onClick={handleActor} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                                <a className="bg-blue-500 w-full float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Diễn viên</a>
                            </li>
                            :
                            <li onClick={handleActor} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                                <a className="w-full bg-info xnm:bg-inherit hover:text-blue-500 float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Diễn viên</a>
                            </li>
                    }
                    {
                        urlTrailer ?  
                            isTrailer ?
                            <li onClick={handleTrailer} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                                <a className="bg-blue-500 w-full float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Trailer</a>
                            </li>
                            :
                            <li onClick={handleTrailer} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                                <a className="w-full bg-info xnm:bg-inherit hover:text-blue-500 float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Trailer</a>
                            </li> : <></>
                    }
                </ul>
            </div>
            {isDescription ? <Description header={"Tóm tắt"} descriptions={descriptions} /> : <></>}
            {isActor ? <Actor creator={"Đạo diễn"} directors={directors} actors={actors} /> : <></>}
            {isTrailer ? <Trailer urlTrailer={urlTrailer}/> : <></>}
        </div>
    )
}
export default Info