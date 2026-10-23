import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import StoryIcon from "../../components/stories-components/StoryIcon";
import PostCard from "../../components/post-components/PostCard";



const postsData = [
  {
    id: 1,
    username: "_ayushh._kumar",
    fullName: "Ayush Kumar",
    avatar: "https://i.pravatar.cc/150?img=12",
    verified: true,
    location: "Tokyo, Japan",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1080&q=85"
      }
    ],
    caption: "Somewhere I'd rather be. 🌆 Collecting moments, one city at a time.",
    hashtags: ["Tokyo", "TravelDiaries", "CityVibes"],
    likes: 9500,
    comments: 1483,
    reposts: 177,
    shares: 82,
    createdAt: "2h",
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    username: "riya.sharma",
    fullName: "Riya Sharma",
    avatar: "https://i.pravatar.cc/150?img=47",
    verified: false,
    location: "Manali, India",
    media: [
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ],
    caption: "Mountains are calling, and I must go. 🏔️❄️",
    hashtags: ["Mountains", "NatureLovers", "Travel"],
    likes: 2456235,
    comments: 89,
    reposts: 34,
    shares: 21,
    createdAt: "4h",
    isLiked: false,
    isSaved: true
  },
  {
    id: 3,
    username: "rahul.verma",
    fullName: "Rahul Verma",
    avatar: "https://i.pravatar.cc/150?img=11",
    verified: true,
    location: "Mumbai, India",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/movie.mp4"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ],
    caption: "Golden skies, city lights, and a thousand stories. 🌃",
    hashtags: ["Mumbai", "NightPhotography", "CityLights"],
    likes: 12800,
    comments: 321,
    reposts: 205,
    shares: 119,
    createdAt: "6h",
    isLiked: true,
    isSaved: false
  },
  {
    id: 4,
    username: "priya.creates",
    fullName: "Priya Singh",
    avatar: "https://i.pravatar.cc/150?img=44",
    verified: false,
    location: "Jaipur, India",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1080&q=85"
      }
    ],
    caption: "A little pink, a little history, and a lot of magic. 🩷",
    hashtags: ["Jaipur", "IncredibleIndia", "Architecture"],
    likes: 3872,
    comments: 104,
    reposts: 65,
    shares: 43,
    createdAt: "8h",
    isLiked: false,
    isSaved: false
  },
  {
    id: 5,
    username: "dev.codes",
    fullName: "Dev Patel",
    avatar: "https://i.pravatar.cc/150?img=13",
    verified: false,
    location: "Bengaluru, India",
    media: [
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1080&q=85"
      }
    ],
    caption: "Coffee ☕, clean code, and fixing bugs at 2 AM. Developer life!",
    hashtags: ["WebDevelopment", "CodingLife", "Programmer"],
    likes: 876,
    comments: 57,
    reposts: 19,
    shares: 12,
    createdAt: "10h",
    isLiked: false,
    isSaved: true
  },
  {
    id: 6,
    username: "ananya.travels",
    fullName: "Ananya Gupta",
    avatar: "https://i.pravatar.cc/150?img=49",
    verified: true,
    location: "Bali, Indonesia",
    media: [
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/movie.mp4"
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      }
    ],
    caption: "Paradise found. 🌴🌊 Leaving a little piece of my heart here.",
    hashtags: ["Bali", "BeachLife", "Wanderlust"],
    likes: 18900,
    comments: 426,
    reposts: 312,
    shares: 201,
    createdAt: "12h",
    isLiked: false,
    isSaved: false
  },
  {
    id: 7,
    username: "foodie_aarav",
    fullName: "Aarav Mehta",
    avatar: "https://i.pravatar.cc/150?img=15",
    verified: false,
    location: "Delhi, India",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1080&q=85"
      }
    ],
    caption: "Good food, good mood. 🍕 Tell me this doesn't look amazing!",
    hashtags: ["Foodie", "PizzaLovers", "FoodPhotography"],
    likes: 1643,
    comments: 92,
    reposts: 27,
    shares: 68,
    createdAt: "14h",
    isLiked: true,
    isSaved: false
  },
  {
    id: 8,
    username: "meera.clicks",
    fullName: "Meera Joshi",
    avatar: "https://i.pravatar.cc/150?img=45",
    verified: false,
    location: "Kerala, India",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1080&q=85"
      }
    ],
    caption: "Some moments deserve to be remembered forever. 🌿📸",
    hashtags: ["Photography", "Nature", "PeacefulPlaces"],
    likes: 5621,
    comments: 137,
    reposts: 88,
    shares: 49,
    createdAt: "16h",
    isLiked: false,
    isSaved: false
  },
  {
    id: 9,
    username: "fitness_with_adi",
    fullName: "Aditya Singh",
    avatar: "https://i.pravatar.cc/150?img=14",
    verified: true,
    location: "Bhopal, India",
    media: [
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/movie.mp4"
      },
      {
        type: "video",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      },
      {
        type: "video",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    caption: "No shortcuts, just consistency. One workout at a time. 💪",
    hashtags: ["FitnessJourney", "GymLife", "StayConsistent"],
    likes: 2187,
    comments: 76,
    reposts: 51,
    shares: 32,
    createdAt: "18h",
    isLiked: false,
    isSaved: true
  },
  {
    id: 10,
    username: "sana.aesthetic",
    fullName: "Sana Khan",
    avatar: "https://i.pravatar.cc/150?img=48",
    verified: false,
    location: "Paris, France",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1080&q=85"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1080&q=85"
      }
    ],
    caption: "Romanticizing life, one little moment at a time. 🥐☕✨",
    hashtags: ["Paris", "Aesthetic", "LifeLately"],
    likes: 7843,
    comments: 219,
    reposts: 96,
    shares: 74,
    createdAt: "1d",
    isLiked: false,
    isSaved: false
  }
];


const Home = () => {
  return (
    <div className='home w-full'>
      <div className="home-header flex justify-between items-center px-4 py-2">
        <svg aria-label="Instagram" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="26" role="img" viewBox="0 0 600 150" width="103">
          <title>Instagram</title><polygon points="0 106.31 15.08 106.31 15.08 8.46 0 11.82 0 106.31"></polygon><path d="M116.77,35.06h0c-5.3,19.69-12.18,38.75-20.69,56.21-1.6,3.2-2.88,4.33-4.65,4.33-1.6,0-2.73-.96-2.73-3.36v-28.03c0-17.78-9.14-29.95-26.14-29.95-8.83,0-16.2,4.16-20.21,11.69v-10.25h-14.28v70.62h14.28v-40.84c0-11.05,7.06-19.37,16.84-19.37,9.13,0,15.23,6.57,15.23,19.22v27.23c0,10.09,5.61,15.05,15.72,15.06,8.34,0,13.47-3.53,17.48-11.69,6.74-13.94,12.83-29.63,17.32-45.33,8.18,14.73,21.97,21.94,21.97,33.47,0,5.93-4.01,11.86-13.63,11.86-5.3,0-10.11-2.4-13.31-5.13l-5.77,11.53c4.01,3.04,11.55,5.6,19.09,5.6,17.32,0,27.43-10.73,27.43-24.19,0-19.06-23.42-29.47-28.23-48.68h-15.72Z"></path><path d="M201.46,92.08c-2.72,1.76-5.12,2.56-7.85,2.56h0c-4.97-.01-7.7-3.05-7.7-8.34v-37.79h16.52v-12.81h-16.52V14.72l-14.28,3.04v17.94h-14.59v12.81h14.59v40.2c0,10.88,7.22,18.58,19.89,18.58,6.73,0,11.55-1.92,15.55-4.48h0s0,0,0,0h0s0,0,0,0l-5.6-10.71Z"></path><path d="M575.46,34.23c-9.95,0-17.98,4.32-21.82,12.01-3.85-7.52-11.22-12.01-21.33-12.01-8.18,0-15.07,3.69-18.6,10.26v-8.81h-14.28v70.63h14.28v-44.51c0-8.97,6.41-15.7,15.23-15.7,8.02,0,13.63,5.44,13.63,16.01v44.2h14.28v-44.52c0-8.97,6.1-15.7,15.08-15.7,8.02,0,13.79,5.44,13.79,16.01v44.2h14.28v-45.49c0-15.86-8.82-26.58-24.54-26.58Z"></path><path d="M263.52,43.37c-5.93-6.09-14.12-9.29-23.26-9.29-19.09,0-33.2,16.01-33.2,36.83s14.12,36.99,33.2,36.99c9.46,0,17.49-3.85,23.26-10.09v8.49h14.28V35.69h-14.28v7.69ZM242.35,95.42c-11.71,0-21.17-9.61-21.17-24.5s9.62-24.34,21.17-24.34,21.17,9.45,21.17,24.34-9.46,24.5-21.17,24.5Z"></path><path d="M472.66,43.37h-.01c-5.93-6.09-14.12-9.29-23.26-9.29-19.09,0-33.2,16.01-33.2,36.83,0,6.39,1.32,12.32,3.68,17.47-4.5,4.85-9.42,7.04-14.74,7.04-8.19,0-13.47-4.97-13.47-15.05s5.61-21.95,18.12-32.36l-6.41-12.33h-36.72v12.81h25.98c-8.98,9.93-14.76,22.42-14.76,33.79,0,16.5,10.91,25.63,25.82,25.63,8.6,0,16.92-3.83,22.41-10.14,5.88,6.33,14,10.14,23.3,10.14,9.3,0,17.49-3.85,23.26-10.09v8.49h14.28V35.69h-14.28v7.69ZM451.49,95.42c-11.71,0-21.17-9.61-21.17-24.5s9.62-24.34,21.17-24.34c11.55,0,21.17,9.45,21.17,24.34s-9.46,24.5-21.17,24.5Z"></path><path d="M344.18,43.36c-5.93-6.09-13.96-9.29-22.93-9.29-18.92,0-33.52,15.53-33.52,36.99,0,19.06,12.04,33.79,28.23,36.36-7.38,4.32-10.75,8.98-10.75,16.02,0,10.09,8.34,18.1,23.26,18.1,19.72,0,29.99-13.46,29.99-30.91V35.67h-14.28v7.69ZM344.18,112.08c0,11.69-6.9,17.13-14.92,17.13-7.22,0-10.59-4.17-10.59-8.49s2.73-9.77,14.76-15.21c4.17-1.92,7.87-4.49,10.75-7.69v14.26ZM323.02,95.42c-11.7,0-21.17-9.61-21.17-24.5,0-14.89,9.62-24.34,21.17-24.34,11.55,0,21.17,9.45,21.17,24.34s-9.46,24.5-21.17,24.5Z"></path>
        </svg>

        <div className="flex gap-3">
          <button className="text-3xl">
            <FiPlus />
          </button>
          <button className="text-2xl">
            <FaRegHeart />
          </button>
        </div>
      </div>

      <div className="w-screen overflow-y-scroll scrollbar-none">
        <div className="story-section w-max h-35 flex items-center gap-4 px-5 ">
          <StoryIcon username={'ayush_12'} />
          <StoryIcon username={'kushhh_22'} />
          <StoryIcon username={'suhani_32'} />
          <StoryIcon username={'amit_35'} />
          <StoryIcon username={'amit_35'} />
          <StoryIcon username={'amit_35'} />
        </div>
      </div>
      <div className="recent-posts-section flex flex-col">
        {
          postsData.map(post => (
            <PostCard post={post} />
          ))
        }
      </div>
    </div>
  )
}

export default Home