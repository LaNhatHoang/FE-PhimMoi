
export default function NotFound() {
    return (
        <div className="bg-p lg:flex-1 p-5">
            <header className="px-2.5 xnm:px-0 lg:px-2.5 py-2.5 flex items-center justify-between">
                <h2 className="pl-2.5 border-l-[3px] border-blue-500 text-white text-xl font-semibold leading-5">Không tìm thấy trang</h2>
            </header>
            <div className="p-2.5 xnm:p-5 text-p">
                <h2 className="mb-4 text-xl xnm:text-2xl font-normal leading-5">
                    {"ERROR "}
                    <span className="font-semibold">404</span>
                </h2>
                <strong className="text-xl">Gợi ý:</strong>
                <ul className="ms-7 my-4 text-sm">
                    <li className="py-[5px] list-disc">Xác minh rằng liên kết là chính xác.</li>
                    <li className="py-[5px] list-disc">Sử dụng hộp tìm kiếm trên trang.</li>
                    <li className="py-[5px] list-disc">Liên hệ với trang hỗ trợ.</li>
                </ul>
            </div>
        </div>
    )
}