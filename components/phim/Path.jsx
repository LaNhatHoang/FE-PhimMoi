import { TbPlayerTrackNext } from 'react-icons/tb'

const Path = ({ type, url, name }) => {
    return (
        <div className='px-2.5 py-1.5 bg-p'>
            <ul className="block overflow-hidden">
                <li className='ps-2.5 flex float-left items-center'>
                    <a href="/" className='text-blue-500 text-sm'>Trang chủ</a>
                    <TbPlayerTrackNext className='text-xs ms-3 text-p' />
                </li>
                <li className='ps-2.5 flex float-left items-center'>
                    <a href={url} className='text-blue-500 text-sm'>{type}</a>
                    <TbPlayerTrackNext className='text-xs ms-3 text-p' />
                </li> 
                <li className='ps-2.5 flex float-left items-center'>
                    <a className='text-sm text-p capitalize'>{name}</a>
                </li>
            </ul>
        </div>
    )
}
export default Path