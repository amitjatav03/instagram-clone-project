import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center p-4 justify-between font-[optimistic]'>
        <div className='flex flex-col gap-6'>
            <Link to={'/login'} className='text-xl'>
                <MdArrowBackIos />
            </Link>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>
                    What's your email?
                </h1>
                <p className='leading-5 text-zinc-200 tracking-tight'>
                    Your email helps keep your <span className='text-sky-400 font-semibold'>Meta Account </span>
                    secure and won't appear on your profile.
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <input
                    type="email"
                    placeholder='Email'
                    className='w-full border border-zinc-600 px-4 py-4 rounded-2xl text-md'
                />
                <p className='text-sm text-zinc-400 tracking-tight'>
                    You'll also receive emails from us and can opt out anytime.
                    <span className='text-sky-400 font-semibold'>Learn more</span>
                </p>
            </div>
            <button type='submit' className='bg-[#0064E0] w-full py-2 rounded-3xl font-semibold'>
                Next
            </button>
        </div>

        <span className='text-sky-400 font-semibold text-sm mb-7 text-center'>I already have an account. <br /><Link to={'/login'} className='underline'>Login</Link></span>
    </div>
  )
}

export default SignupPage