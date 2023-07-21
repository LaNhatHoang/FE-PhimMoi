
const Trailer = ({urlTrailer}) => {
    return (
        <div className="trailer px-6 py-5 lg:px-10 w-full border-b-2 c-border">
            <h2 className="w-full pb-2.5 mb-2 text-lg text-white font-medium">Video trailer</h2>
            <div>
                <div className="pt-56-pt relative overflow-hidden">
                    <iframe className="absolute top-0 left-0 w-full min-h-full"
                        src={urlTrailer} frameborder="0"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
export default Trailer