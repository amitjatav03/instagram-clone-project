import { GoPlus } from 'react-icons/go'
import { TiUserAddOutline } from 'react-icons/ti'
import UserIconDefault from '../../assets/images/user-icon-default.png'

const Profile = () => {
  return (
    <div className='profile-page px-4 py-1 flex flex-col gap-10'>
      <div className="profile-top flex justify-between">
        <button className='text-[2.5rem]'>
          <GoPlus />
        </button>
        <button className='text-zinc-300 font-semibold'>Logout</button>
      </div>
      <div className="profile-details flex flex-col gap-3">
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
    </div>
  )
}

export default Profile