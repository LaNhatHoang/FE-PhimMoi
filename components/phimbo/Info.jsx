'use client'

const Info = (props) => {
    const {isPart, setIsPart, isDescription, setIsDescription, isActor, setIsActor} = props
    const handlePart = () => {
        setIsPart(true)
        setIsDescription(false)
        setIsActor(false)
    }
    const handleDesc = () => {
        setIsPart(false)
        setIsDescription(true)
        setIsActor(false)
    }
    const handleActor = () => {
        setIsPart(false)
        setIsDescription(false)
        setIsActor(true)
    }
    return (
        <div className="Info block">
            <div className="border-b-2 c-border">
                <ul className="p-2.5 xnm:px-6 bg-art xnm:bg-inherit overflow-hidden">
                    {
                        isPart ? <li onClick={handlePart} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                            <a className="bg-blue-500 w-full float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Xem phim</a>
                        </li> : <li onClick={handlePart} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                            <a className="w-full bg-info xnm:bg-inherit hover:text-blue-500 float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Xem phim</a>
                        </li>

                    }
                    {
                        isDescription ? <li onClick={handleDesc} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                            <a className="bg-blue-500 w-full float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Thông tin</a>
                        </li> : <li onClick={handleDesc} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                            <a className="w-full bg-info xnm:bg-inherit hover:text-blue-500 float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Thông tin</a>
                        </li>
                    }
                    {
                        isActor ? <li onClick={handleActor} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                            <a className="bg-blue-500 w-full float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Diễn viên</a>
                        </li> : <li onClick={handleActor} className="w-1/2 xnm:w-auto float-left p-0.5 hover:cursor-pointer">
                            <a className="w-full bg-info xnm:bg-inherit hover:text-blue-500 float-left text-center py-2 xnm:px-5 rounded text-white text-sm font-medium">Diễn viên</a>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Info