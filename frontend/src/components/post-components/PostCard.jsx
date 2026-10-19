import userIcon from '../../assets/images/user-icon-default.png'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const PostCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (

        <div className='bg-[#0B0F13] flex gap-2 flex-col '>
            <div ref={menuRef} className="flex justify-between p-4 relative">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className='w-11 h-11' src={userIcon} alt="" />
                    </div>

                    <div>
                        <p className="text-white flex gap-2 items-center">_ayushh._.kumar <span className='text-[#0276CF]'><VscVerifiedFilled /></span> <span>   </span></p>
                        {/* <p className="text-white">Bhopal, Madhya Pradesh</p> */}
                    </div>

                </div>

                <button id='menu-open-btn'
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-white cursor-pointer text-3xl'><HiDotsHorizontal />
                </button>

                {isOpen && (
                    <div id='menu'
                        className="bg-[#27262B] h-90 w-55 rounded-2xl absolute p-3 right-2 flex flex-col gap-5 cursor-pointer">
                        <p className='text-[#CA4354]'>Report</p>
                        <p className='text-[#CA4354]'>Unfollow</p>
                        <p className='text-white'>Add to favorites</p>
                        <p className='text-white'>About this account</p>
                        <p className='text-white'>Go to post</p>
                        <p className='text-white'>Share to...</p>
                        <p className='text-white'>Copy link</p>
                        <p className='text-white'>Embed</p>
                    </div>
                )}

            </div>

            {/* ----------------------------------------------------------------------------------- <i class="ri-more-2-fill"></i>*/}

            <div className='flex flex-col items-center'>
                {/* <ImHeart id='instagram-heart' 
                className='absolute instagram-heart text-red-600 text-8xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /> */}
                <img className='mt-3' src={'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'} alt="tokyo" />
                <button className='text-white text-3xl'><HiDotsHorizontal /></button>

            </div>

            {/* ----------------------------------------------------------------------------------- */}

            <div className='px-3'>
                <div className='text-white flex justify-between  ml-2' >
                    <div className='flex gap-2 text-2xl cursor-pointer items-center'>
                        <FaRegHeart />
                        <p className='text-[1rem]' >9.5k</p>
                        <IoChatbubbleOutline />
                        <p className='text-[1rem]' >148</p>
                        <HiMiniArrowPathRoundedSquare />
                        <p className='text-[1rem]' >177</p>
                        <PiPaperPlaneTiltBold />
                    </div>
                    <div className='text-[1.2rem] cursor-pointer'>
                        <FaRegBookmark />
                    </div>
                </div>
            </div>

            <div className='p-3'>
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