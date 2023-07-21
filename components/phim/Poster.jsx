import { FaStar } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import Image from 'next/image'

const Poster = (props) => {
    const {name, nameEng, urlImage, createAt, categorys, normalizeVietnamese, star, time, country, rated, review, sub} = props
    const createArray = (length)=>{
        let arr = []
        for(let i=0;i<length;i++){
            arr.push(i)
        }
        return arr
    }
    return (
        <div className="Sheader p-[25px] overflow-hidden border-b-2 c-border">
            <div className="Image w-[110px] md:w-[140px] float-left relative">
                <Image className="box-shadow" src={`/api/image/${urlImage}`} alt={name} width={185} height={278}/>
                {/* <img className="box-shadow" src={`/api/image/${urlImage}`} alt={name} /> */}
            </div>
            <div className="Data ms-[130px] md:ms-[160px] h-full overflow-hidden">
                <h1 className="text-white text-3xl font-normal">{name}</h1>
                <div className='py-[5px]'>
                    <h3 className="text-p text-[13px] leading-5">{nameEng}</h3>
                </div>
                <div className="py-[5px] text-[13px] text-p overflow-hidden">
                    <span className="pr-3.5 float-left font-medium">{new Date(createAt).toString().substring(4,15)}</span>
                    { time ? <span className="pr-3.5 float-left font-medium">{`${time} phút`}</span> : <></>}
                    { country ? <span className="pr-3.5 float-left font-medium">{country}</span> : <></>}
                    { rated ? <span className="pr-3.5 float-left font-medium">{rated}</span> : <></>}
                </div>
                {
                    sub ? <div className="py-[5px] text-[13px] text-white overflow-hidden">
                        <span className="px-2.5 py-[5px] bg-blue-500 float-left font-medium uppercase">{sub}</span>
                    </div> : <></>
                }
                <div className="Star hidden xnm:flex lg:hidden xlg:flex py-2.5 my-2.5 border-y c-border">
                    <div style={{ background: 'rgba(255,255,255,.08)' }}
                        className="text-2xl text-white font-medium px-4 py-1.5 rounded"
                    >{star}</div>
                    <div className="ms-2.5">
                        <div className="flex">
                            {   createArray(star).map((value, index) => (
                                    <FaStar key={index} className="text-lg me-1 text-blue-500 " />
                                ))
                            }
                            {   createArray(10-star).map((value, index) => (
                                    <FaStar key={index} className="text-lg me-1 text-zinc-700" />
                                ))
                            }
                        </div>
                        <div className="mt-2 text-p text-xs flex items-center">
                            <CgProfile className="me-1 text-sm" />
                            <span className="me-1">{review}</span>
                            <span>đánh giá</span>
                        </div>
                    </div>
                </div>
                <div className="h-5 overflow-hidden">
                    {
                        categorys.map((category, index)=>{
                            if(index == 0){
                                return (<a key={index} href={`/the-loai/${normalizeVietnamese(category.name).replace(/\s+/g, '-').toLowerCase()}`}
                                    className="pr-2.5 text-[13px] text-white font-medium float-left hover:text-blue-500" 
                                >{category.name}</a>)
                            }
                            return(<a key={index} href={`/the-loai/${normalizeVietnamese(category.name).replace(/\s+/g, '-').toLowerCase()}`}
                                className="px-2.5 border-l border-stone-600 text-[13px] text-white font-medium float-left hover:text-blue-500" 
                                >{category.name}</a>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Poster