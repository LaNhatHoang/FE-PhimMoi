
import { TbPlayerTrackNext } from 'react-icons/tb'

const PathP = ({ url, name, namePart }) => {
    return (
        <div className='px-2.5 py-1.5 bg-p'>
            <ul className="block overflow-hidden">
                <li className='ps-2.5 flex float-left items-center'>
                    <a href="/" className='text-blue-500 text-sm'>Trang chủ</a>
                    <TbPlayerTrackNext className='text-xs ms-3 text-p' />
                </li>
                <li className='ps-2.5 flex float-left items-center'>
                    <a href="/phim-bo" className='text-blue-500 text-sm'>Phim bộ</a>
                    <TbPlayerTrackNext className='text-xs ms-3 text-p' />
                </li> 
                <li className='ps-2.5 flex float-left items-center'>
                    <a href={`/phim-bo/${url}`} className='text-blue-500 text-sm'>{name}</a>
                    <TbPlayerTrackNext className='text-xs ms-3 text-p' />
                </li> 
                <li className='ps-2.5 flex float-left items-center'>
                    <a className='text-sm text-p capitalize'>{namePart}</a>
                </li>
            </ul>
        </div>
    )
}
export default PathP