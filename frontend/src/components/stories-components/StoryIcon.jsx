import userIcon from '../../assets/images/user-icon-default.png';

const StoryIcon = (props) => {
  return (
    <div className='story flex flex-col items-center gap-2 '>
        <div className="w-[5.4rem] h-[5.4rem] rounded-full flex items-center justify-center bg-[conic-gradient(from_0deg,#ff00a8,#a100ff,#ff1493,#ff7a00,#ffd000,#ff7a00,#ff00a8)]">
            <img 
                src={userIcon} 
                className='w-20 h-20 rounded-full border-3 border-black'
                alt="story" 
            />
        </div>
        <span className='text-xs'>
            { props.username }
        </span>
    </div>
  )
}

export default StoryIcon