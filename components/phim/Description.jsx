
const Description = ({ header, descriptions }) => {
    const arrDesc = descriptions.split("<br>")
    return (
        <div className="px-6 py-5 lg:px-10 border-b-2 c-border">
            <h2 className="mb-1.5 pb-3 text-lg font-medium text-white capitalize">{header}</h2>
            <div>
                {
                    arrDesc.map((desc, index) => {
                        if (index < arrDesc.length - 1) {
                            return (
                                <p key={index} className="text-p text-sm font-normal leading-6 mb-3">
                                    {desc}
                                </p>
                            )
                        }
                        return (
                            <p key={index} className="text-p text-sm font-normal leading-6">
                                {desc}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Description