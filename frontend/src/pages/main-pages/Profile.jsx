import { GoPlus } from 'react-icons/go'
import { TfiLayoutGrid3Alt } from "react-icons/tfi"
import { TiUserAddOutline } from 'react-icons/ti'
import { LuSquarePlay } from 'react-icons/lu'
import { FaRegBookmark } from "react-icons/fa";
import UserIconDefault from '../../assets/images/user-icon-default.png'
import HeartHands from '../../assets/images/heart-hands.png'
import { useState } from 'react';

const Profile = () => {
  const [posts, setPosts] = useState([1]);
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className='profile-page py-1 flex flex-col gap-10'>
      <div className="profile-top flex justify-between px-4">
        <button className='text-[2.5rem]'>
          <GoPlus />
        </button>
        <button className='text-zinc-300 font-semibold'>Logout</button>
      </div>
      <div className="profile-details flex flex-col gap-3 px-4">
        <div className="user-info">
          <div className="info-top flex gap-6 ">
            <img src={UserIconDefault} className='w-22 h-22' alt="" />
            <div className='flex flex-col w-full gap-3'>
              <h2 className='font-semibold text-lg'>Kush Ben</h2>
              <div className='profile-numbers flex justify-between'>
                <div className="posts-no">
                  <h1 className='font-semibold leading-none text-lg'>0</h1>
                  <span className='text-zinc-300'>posts</span>
                </div>
                <div className="followers-no">
                  <h1 className='font-semibold leading-none text-lg'>837</h1>
                  <span className='text-zinc-300'>followers</span>
                </div>
                <div className="following-no">
                  <h1 className='font-semibold leading-none text-lg'>634</h1>
                  <span className='text-zinc-300'>following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="info-btm">
            <h3>_kushh_18</h3>
            <h4>Kush ki profile bio</h4>
          </div>
        </div>
        <div className="more-btns w-full flex gap-2">
          <button className='bg-[#363C44] w-[45%] py-1 rounded-lg'>
            Edit Profile
          </button>
          <button className='bg-[#363C44] w-[45%] py-1 rounded-lg'>
            Share Profile
          </button>
          <button className='bg-[#363C44] w-[10%] text-xl rounded-lg flex items-center justify-center'>
            <TiUserAddOutline />
          </button>
        </div>
      </div>

      <div className='profile-posts'>
        <div className="post-bar flex w-full justify-between border-b border-zinc-600">
          <div className='active:bg-red-500 text-2xl w-full flex justify-center items-center border-b-2 border-white py-2'>
            <TfiLayoutGrid3Alt />
          </div>
          <div className='text-3xl w-full flex justify-center items-center py-2 text-zinc-400'>
            <LuSquarePlay />
          </div>
          <div className='text-2xl w-full flex justify-center items-center py-2 text-zinc-400'>
            <FaRegBookmark />
          </div>
        </div>

        {
          (posts.length !== 0) 
          ?
          <div className='posts-grid grid grid-cols-3'>
            <div className='h-42 bg-red-500'></div>
            <div className='h-42 bg-blue-500'></div>
            <div className='h-42 bg-green-500'></div>
            <div className='h-42 bg-purple-500'></div>
            <div className='h-42 bg-orange-500'></div>
            <div className='h-42 bg-pink-500'></div>
            <div className='h-42 bg-slate-500'></div>
          </div>
          :
          <div className='create-posts-ui flex justify-center items-start py-20 bg-[#0C1014] h-[90vh] gap-4'>
            <div className='flex flex-col justify-center items-center gap-4 '>
              <img className='w-72' src={HeartHands} alt="heart-hands-pic" />
              <div className='mb-8 flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold text-center leading-none'>Create your first <br /> post</h1>
                <h3 className='text-md text-zinc-300'>Give this space some love.</h3>
              </div>
              <button className='px-5 py-2 font-semibold bg-blue-500 rounded-xl'>Create</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Profile