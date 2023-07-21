
const Title = ({title}) => {
    return (
        <h1 className="text-white text-center film-title overflow-hidden text-3xl font-bold leading-8 mt-[15px] mb-[25px]
                before:content-[''] before:inline-block before:h-[3px] before:w-1/2 before:relative before:align-middle before:right-3
                after:content-[''] after:inline-block after:h-[3px] after:w-1/2 after:relative after:align-middle after:left-3"
        >{title}</h1>
    )
}
export default Title