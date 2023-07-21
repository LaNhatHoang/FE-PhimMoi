import {FaTelegramPlane,FaInstagram, FaFacebookF} from 'react-icons/fa'

const Share = ({share}) => {
    return (
        <div className="share px-6 py-5 lg:px-10 w-full border-b-2 c-border overflow-hidden">
            <div className="float-left w-full">
                <span className="me-3 py-0.5 pl-1.5 pr-3 border-r-2 border-stone-600 float-left text-[15px] text-p font-medium">Chia sẻ
                    <b className="text-white ms-2.5 font-medium">{share}</b>
                </span>
                <div className="flex">
                    <a href="" className="me-1.5 px-2 py-1 rounded bg-blue-800">
                        <FaFacebookF className="m-0 text-xl text-white" />
                    </a>
                    <a href="" className="me-1.5 px-2 py-1 rounded bg-sky-500">
                        <FaTelegramPlane className="text-xl text-white" />
                    </a>
                    <a href="" className="me-1.5 px-2 py-1 rounded instagram">
                        <FaInstagram className="text-xl text-white" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Share