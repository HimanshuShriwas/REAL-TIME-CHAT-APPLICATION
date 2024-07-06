import React from 'react'
import Gender from './Gender';



const SignUp = () => {
  return (<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter 
    backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3xl font-saemifold text-center text-grey-400'>
      SignUp <span className='text-blue-500'> Connectopia </span>
    </h1>
    <form>
       <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Full Name </span>
          </label>
          <input type='text' placeholder='Enter Fullname' className='w-full input input-bordered h-10'/>
          </div>
          <div>
           <label className='label p-2'>
            <span className='text-base label-text'> Username </span>
          </label> 
          <input type='text' placeholder='Enter Username ' className='w-full input input-bordered h-10'/>
          </div>
          <div> 
            <label className='label'>
              <span className='text-base label-text'> Password</span>

             </label>
            <input 
            type='password' placeholder='Enter password' className='w-full input input-bordered h-10'/>
            </div>
            <div>
              <label className='label'>
                <span className='text-base label-text'> Confirm Password </span>
              </label>
              <input type='password' placeholder=' Confirm Password '
              className='w-full input input-bordered h-10' />
            </div>
            <Gender/>
          
          
          
          <a className='text-sm hover:underline hover:text-blue-600 mt-3 inline-block' href='#'>
            Alredy have an account?
          </a>
          <div> 
            <button className='btn btn-block btn-sm mt-2 border-slate-700'> Sign Up</button>
          </div>
    </form>
    </div>
          
    </div>
  )
}

export default SignUp;
