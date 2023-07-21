import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'

const Track = ({ parts, setIndexPart, indexPart, setPart }) => {

    const handelClick = ()=>{
        setPart(null)
        setIndexPart(null)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <div className="flex border-t-2 c-border">
            {
                indexPart != 0 ?
                    <div onClick={()=>{setPart(parts[indexPart-1]) ; setIndexPart(indexPart-1)}} className="w-1/3 py-4 sm:py-2.5 bg-prev-next flex justify-center text-xl text-white border-b border-black hover:cursor-pointer group">
                        <div className="flex items-center">
                            <TbPlayerTrackPrevFilled />
                            <div className="hidden sm:block mx-1.5 text-[15px] text-p uppercase group-hover:text-blue-500">Prev</div>
                        </div>
                    </div>
                    :
                    <div className="w-1/3 py-4 sm:py-2.5 flex justify-center text-xl text-white border-b border-black hover:cursor-not-allowed">
                        <div className="flex items-center opacity-40">
                            <TbPlayerTrackPrevFilled />
                            <div className="hidden sm:block mx-1.5 text-[15px] text-p uppercase">Prev</div>
                        </div>
                    </div>
            }
            <div onClick={handelClick} className="w-1/3 py-4 sm:py-2.5 bg-prev-next flex justify-center text-xl text-white border-b border-black border-x-2 border-black hover:cursor-pointer group">
                <div className="flex items-center">
                    <GiHamburgerMenu />
                    <div className="hidden sm:block mx-1.5 text-[15px] text-p uppercase group-hover:text-blue-500">All</div>
                </div>
            </div>
            {
                indexPart != parts.length - 1 ?
                    <div onClick={()=>{setPart(parts[indexPart+1]); setIndexPart(indexPart+1)}} className="w-1/3 py-4 sm:py-2.5 bg-prev-next flex justify-center text-xl text-white border-b border-black hover:cursor-pointer group">
                        <div className="flex items-center">
                            <div className="hidden sm:block mx-1.5 text-[15px] text-p uppercase group-hover:text-blue-500">Next</div>
                            <TbPlayerTrackNextFilled />
                        </div>
                    </div>
                    :
                    <div className="w-1/3 py-4 sm:py-2.5 flex justify-center text-xl text-white border-b border-black hover:cursor-not-allowed">
                        <div className="flex items-center opacity-40">
                            <div className="hidden sm:block mx-1.5 text-[15px] text-p uppercase">Next</div>
                            <TbPlayerTrackNextFilled />
                        </div>
                    </div>
            }
        </div>
    )
}
export default Track