import userIcon from '../../assets/images/user-icon-default.png'

const PostCard = () => {
    return (
        <div className='bg-[#0B0F13]  flex gap-2 flex-col'>
            <div className="flex justify-between px-3">
                <div className="flex gap-2">
                    <div className='flex items-center gap-2'>
                        <img className='w-8 h-8' src={userIcon} alt="" />
                        <p className="text-white">_ayushh._.kumar <span className='text-[#0276CF]'><i class="ri-verified-badge-fill"></i></span> <span>   </span></p>
                    </div>
                </div>

                <button className='text-white cursor-pointer text-3xl'>
                    ...
                </button>
            </div>
            {/* ----------------------------------------------------------------------------------- <i class="ri-more-2-fill"></i>*/}
            <div className='flex flex-col'>
                <img src={'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'} alt="tokyo" />
                <button className='text-white text-2xl'>...</button>
            </div>
            {/* ----------------------------------------------------------------------------------- */}

            <div>
                <div className='text-white flex justify-between  ml-2' >
                    <div className='flex gap-2 text-2xl cursor-pointer items-center'>
                        <i class="ri-heart-3-line"></i>
                        <p className='text-[1rem]' >9.5k</p>
                        <i class="ri-chat-3-line"></i>
                        <p className='text-[1rem]' >148</p>
                        <i class="ri-arrow-left-right-line"></i>
                        <p className='text-[1rem]' >177</p>
                        <i class="ri-telegram-2-line"></i>
                    </div>
                    <div className='text-[1.2rem]'>
                        <i class="ri-bookmark-line"></i>
                    </div>
                </div>
            </div>

            <div className='px-3'>
                <p className='text-white'>
                    ayushh..kumar 📍 Tokyo, Japan

                    Somewhere I'd rather be. 🌃
                    Collecting moments, one city at a time. <br />

                    <span className='text-[#0276CF]'>#Tokyo #TravelDiaries #CityVibes</span>

                </p>

            </div>


        </div>
    )
}

export default PostCard