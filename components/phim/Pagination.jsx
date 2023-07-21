import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

const Pagination = ({url, param, current, total}) => {
    const createArray = (start, end) => {
        let arr = []
        if(start<1) start = 1
        for (let i = start; i <= end; i++) {
            arr.push(i)
        }
        return arr
    }
    const parseUrl = (index)=>{
        if(index==1){
            if(param){
                return `${url}${param}`
            }
            return `${url}`
        }
        if(param){
            return `${url}/page/${index}${param}`
        }
        return `${url}/page/${index}`
    }
    return (
        <div className="Pagination text-xs text-white">
            {
                total <= 5 ? createArray(1,total).map((value, index) => {
                    if (value != current) {
                        return (<a key={index} href={parseUrl(value)} className="mx-[5px] py-1.5 px-2.5 float-left border rounded border-black hover:text-blue-500 hover:bg-black">{value}</a>)
                    }
                    return (<span key={index} className="mx-[5px] py-1.5 px-2.5 float-left border rounded border-black text-blue-500 bg-black">{value}</span>)
                })
                    :
                    <>
                        {current == 1 ?
                            <></>
                            :
                            <a href={parseUrl(current-1)} className="mx-[5px] py-2 px-2.5 float-left border rounded border-black hover:text-blue-500 hover:bg-black">
                                <AiFillCaretLeft />
                            </a>
                        }
                        {
                            createArray(current - 2, current-1).map((value, index) => {
                                return (<a key={index} href={parseUrl(value)} className="mx-[5px] py-1.5 px-2.5 float-left border rounded border-black hover:text-blue-500 hover:bg-black">{value}</a>)
                            })
                        }
                        <span className="mx-[5px] py-1.5 px-2.5 float-left border rounded border-black text-blue-500 bg-black">{current}</span>
                        {
                            createArray(current + 1, current + 2).map((value, index) => {
                                if(value<=total){
                                    return (<a key={index} href={parseUrl(value)} className="mx-[5px] py-1.5 px-2.5 float-left border rounded border-black hover:text-blue-500 hover:bg-black">{value}</a>)
                                }
                            })
                        }
                        {current == total ?
                            <></>
                            :
                            <a href={parseUrl(current+1)} className="mx-[5px] py-2 px-2.5 float-left border rounded border-black hover:text-blue-500 hover:bg-black">
                                <AiFillCaretRight />
                            </a>
                        }
                    </>
            }
        </div>
    )
}
export default Pagination