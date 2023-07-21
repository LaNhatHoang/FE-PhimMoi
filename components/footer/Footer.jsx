'use client'
import Image from 'next/image'
import {FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram, FaYoutube} from 'react-icons/fa'
import {AiOutlineUp} from 'react-icons/ai'

const Footer = () => {
    const handleClick = ()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return (
        <div className='hidden bg-p lg:block px-10 w-full shadow-footer border-t c-border'>
            <div className='py-10 flex flex-col-reverse xl:flex-row justify-between border-b c-border'>
                <div className='Logo max-w-xs'>
                    <div className='py-2.5'>
                        <Image src='/phimmoi.png' width='200' height='42' alt='logo' />
                    </div>
                    <div className='py-2.5 text-[13px] text-p font-medium'>
                        <p>
                            <a className='text-blue-500 me-1' href="/">Phimmoi</a>
                            - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
                        </p>
                    </div>
                </div>
                <div className='mb-3 xl:mb-0 xl:ms-8 xl:max-w-2xl flex flex-1'>
                    <div className='w-1/3'>
                        <h3 className='py-1.5 text-white text-[15px] font-medium'>Phim mới</h3>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/the-loai/phim-khoa-hoc">Phim Khoa Học</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/the-loai/phim-kinh-di">Phim Kinh Dị</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/the-loai/phim-chieu-rap">Phim Chiếu Rạp</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/the-loai/phim-hinh-su">Phim Hình Sự</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/the-loai/phim-hanh-dong">Phim Hành Động</a>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <h3 className='py-1.5 text-white text-[15px] font-medium'>Phim hay</h3>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/quoc-gia/phim-au-my">Phim Âu Mỹ</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/quoc-gia/phim-han-quoc">Phim Hàn Quốc</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/quoc-gia/phim-trung-quoc">Phim Trung Quốc</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/quoc-gia/phim-nhat-ban">Phim Nhật Bản</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/quoc-gia/phim-thai-lan">Phim Thái Lan</a>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <h3 className='py-1.5 text-white text-[15px] font-medium'>Thông tin</h3>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="/gioi-thieu">Giới thiệu</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="">Liên hệ chúng tôi</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="">Điều khoản sử dụng</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="">Chính sách riêng tư</a>
                        </div>
                        <div className='py-1 text-blue-500 text-[13px]'>
                            <a href="">Khiếu nại bản quyền</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Copy py-5 flex justify-between'>
                <div className='py-4 text-[13px] text-p font-medium'>© Phimmoi</div>
                <div className='flex items-center'>
                    <a className='h-4 px-4 border-r border-stone-600' href="https://facebook.com" target='blank'>
                        <FaFacebookF className='text-white'/>
                    </a>
                    <a className='h-4 px-4 border-r border-stone-600' href="https://twitter.com" target='blank'>
                        <FaTwitter className='text-white'/>
                    </a>
                    <a className='h-4 px-4 border-r border-stone-600' href="https://web.telegram.org" target='blank'>
                        <FaTelegramPlane className='text-white'/>
                    </a>
                    <a className='h-4 px-4 border-r border-stone-600' href="https://instagram.com" target='blank'>
                        <FaInstagram className='text-white'/>
                    </a>
                    <a className='h-4 px-4' href="https://youtube.com" target='blank'>
                        <FaYoutube className='text-white'/>
                    </a>
                    <div onClick={handleClick} style={{background: 'rgba(255,255,255,.2)'}} className='h-7 px-3 rounded-md flex items-center hover:cursor-pointer'>
                        <AiOutlineUp className='text-white'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer