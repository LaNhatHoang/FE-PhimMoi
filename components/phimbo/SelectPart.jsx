
const SelectPart = ({ parts, part, setPart, setIndexPart }) => {

    return (
        <div className="Part px-5 py-[25px] lg:px-10 border-b-2 c-border">
            <h2 className="mb-1.5 pb-3 text-lg font-medium text-white">Chọn tập phim</h2>
            <div>
                <div className="overflow-hidden">
                    {
                        parts.map((item, index) => {
                            if (item.id == part?.id) {
                                return (
                                    <div key={index} className="bg-part opacity-20 mt-[5px] me-[5px] rounded-[3px] overflow-hidden float-left hover:cursor-pointer">
                                        <a className="px-2.5 py-1.5 block text-sm text-white font-medium">{item.name}</a>
                                    </div>
                                )
                            }
                            if(item.servers.length==0){
                                return (
                                    <div onClick={() => {setPart(item); setIndexPart(index)}} key={index} className="bg-part opacity-50 mt-[5px] me-[5px] rounded-[3px] overflow-hidden float-left hover:bg-blue-500 hover:cursor-pointer">
                                        <a className="px-2.5 py-1.5 block text-sm text-white font-medium">{item.name}</a>
                                    </div>
                                )
                            }
                            return (
                                <div onClick={() => {setPart(item); setIndexPart(index)}} key={index} className="bg-part mt-[5px] me-[5px] rounded-[3px] overflow-hidden float-left hover:bg-blue-500 hover:cursor-pointer">
                                    <a className="px-2.5 py-1.5 block text-sm text-white font-medium">{item.name}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default SelectPart