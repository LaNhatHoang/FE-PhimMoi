import Image from "next/image"

const Actor = ({ creator, directors, actors}) => {
    return (
        <div className="px-6 py-5 lg:px-10 w-full overflow-hidden border-b-2 c-border">
            <h2 className="pb-2.5 mb-2 text-lg text-white font-medium">{creator}</h2>
            <div className="persons float-left w-full">
                {
                    directors.map((director, index) => (
                        <div key={index} style={{ minHeight: '70px' }} className="w-full border-b c-border overflow-hidden relative float-left mb-2.5 pb-2.5 pt-1.5 pl-[73px] xnm:pt-2.5">
                            <div className="absolute top-0 left-0 w-[60px] h-[60px] overflow-hidden">
                                <Image className="w-full h-auto mt-[-15px]" src={director.urlImg} alt={""} width={92} height={138}/>
                                {/* <img className="w-full h-auto mt-[-15px]" src={director.urlImg} alt={director.name} /> */}
                            </div>
                            <div className="data pr-5 overflow-hidden">
                                <div className="mb-1 text-[15px] text-white leading-[18px] font-medium w-full float-left xnm:truncate">{director.name}</div>
                                <div className="text-xs font-light text-p w-full float-left xnm:truncate">{director.role}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className="w-full pb-2.5 mb-2 text-lg text-white font-medium">Diễn viên</h2>
            <div className="persons float-left w-full">
                {
                    actors.map((actor, index) => (
                        <div key={index} style={{ minHeight: '70px' }} className="w-full xnm:w-1/2 2xl:w-1/3 border-b c-border overflow-hidden relative float-left mb-2.5 pb-2.5 pt-1.5 pl-[73px] xnm:pt-2.5">
                            <div className="absolute top-0 left-0 w-[60px] h-[60px] overflow-hidden">
                                <Image className="w-full h-auto mt-[-15px]" src={actor.urlImg} alt={""} width={92} height={138}/>
                                {/* <img className="w-full h-auto mt-[-15px]" src={actor.urlImg} alt={actor.name} /> */}
                            </div>
                            <div className="data pr-5 overflow-hidden">
                                <div className="mb-1 text-[15px] text-white leading-[18px] font-medium w-full float-left xnm:truncate">{actor.name}</div>
                                <div className="text-xs font-light text-p w-full float-left xnm:truncate">{actor.role}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Actor