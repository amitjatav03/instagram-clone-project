import userIcon from '../../assets/images/user-icon-default.png'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaBookmark, FaHeart, FaRegHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const PostCard = ({ post }) => {
    console.log("post ka data hai", post)
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);


    const formatNumbers = (n) => {
        if(n >= 1000000000) {
            return (n / 1000000000).toFixed(1) + "B";
        }

        if(n >= 1000000) {
            return (n / 1000000).toFixed(1) + "M";
        }

        if(n >= 1000) {
            return (n / 1000).toFixed(1) + "K";
        }

        return n.toString();
    };


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

                    <div className='flex items-center gap-2'>
                        <p className="text-white">{post.username}</p>
                        {
                            post.verified &&
                            <span className='text-[#0276CF]'><VscVerifiedFilled /></span>
                        }
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

            <div className='flex flex-col items-center'>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {
                        post.media.map(postMedia => (
                            <SwiperSlide>
                                {
                                    postMedia.type === 'video' 
                                    ? <video className='w-full h-full object-cover' src={postMedia.url} autoPlay muted></video>
                                    : <img src={postMedia.url} alt="" />
                                }
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>


            <div className='px-3'>
                <div className='text-white flex justify-between  ml-2' >
                    <div className='flex gap-3 text-2xl cursor-pointer items-center'>
                        <div className='flex gap-2'>
                            {
                                post.isLiked 
                                ? <FaHeart className='text-red-500' />
                                : <FaRegHeart />
                            }
                            <p className='text-[1rem]' >
                                {formatNumbers(post.likes)}
                            </p>
                        </div>

                        <div className='flex gap-2'>
                            <IoChatbubbleOutline />
                            <p className='text-[1rem]' >
                                {formatNumbers(post.comments)}
                            </p>
                        </div>
                        <PiPaperPlaneTiltBold />
                    </div>
                    <div className='text-[1.4rem] cursor-pointer'>
                        {
                            (post.isSaved) 
                            ? <FaBookmark /> 
                            : <FaRegBookmark />
                        }
                    </div>
                </div>
            </div>

            <div className='p-3'>
                <p className='caption text-white'>
                    {post.caption}
                    <br />

                    <span className='text-[#0276CF]'>
                        {
                            post.hashtags.map(hashtag => "#" + hashtag + " ")
                        }
                    </span>

                </p>

            </div>


        </div>
    )
}

export default PostCard