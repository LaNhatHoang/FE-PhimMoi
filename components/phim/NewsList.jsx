
const NewsList = ({ data }) => {
    return (
        <div>
            <header className="px-2.5 py-2.5 overflow-hidden">
                <h2 className="pl-2.5 border-l-[3px] float-left border-blue-500 text-white text-xl font-semibold lg:leading-5">Tin tức</h2>
                <div className="float-right text-sm font-medium text-blue-500 leading-7 lg:leading-5">
                    <a href="/tin-tuc">Xem thêm</a>
                </div>
            </header>
            <div>
                {
                    data.map((item, index) => (
                        <div key={index} className="relative">
                            <div className={ index < data.length-1 ? `py-3.5 pl-[86px] border-b c-border` : `py-3.5 pl-[86px] mb-6`}>
                                <div className="absolute left-0 w-[86px] text-center">
                                    <div className="text-2xl font-normal text-blue-500">5</div>
                                    <div className="text-[10px] text-p uppercase">March</div>
                                </div>
                                <div>
                                    <div className="mb-1.5 text-gray-300 text-lg font-medium">
                                        <a href={`/tin-tuc/${item.url}`}>{item.name}</a>
                                    </div>
                                    <div className="text-p text-sm">{item.description}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default NewsList