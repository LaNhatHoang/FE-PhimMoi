
export default function NoSearch({value}){
    return (
        <div className="p-2.5 xnm:p-5 text-p">
            <h2 className="mb-4 text-xl xnm:text-2xl font-normal leading-6">
                {"Không có kết quả nào để hiển thị với "}
                <span className="font-semibold">{value}</span>
            </h2>
            <strong className="text-xl">Gợi ý:</strong>
            <ul className="ms-7 my-4 text-sm">
                <li className="py-[5px] list-disc">Hãy chắc chắn rằng tất cả các từ đều đúng chính tả.</li>
                <li className="py-[5px] list-disc">Hãy thử các từ khóa khác nhau.</li>
                <li className="py-[5px] list-disc">Thử những từ khóa thông thường hơn.</li>
            </ul>
        </div>
    )
}