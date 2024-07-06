import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-lg backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Login
          <span className="text-blue-600"> Connect_Pro </span>
        </h1>
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-gray-800">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-medium text-gray-800">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;








// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-centermin-w-96 mx-auto'>
//         <div className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter
//          backdrop-blur-md bg-opacity-0 border border-gray-100'>
//           <h1 className='text-3xl font-bold text-center text-black-500'>
//             Login
//             <span className='text-blue-500'>  Connect_Pro </span>
//           </h1>
//           <form >
//             <div>
//                 <label classmate='lable p-2 '>
//                 <span className='text-base label-text'>Username</span>
//                 </label>
//                 <input type='text' placeholder='Enter username' 
//                 className='w=full input input-bordered h-10' />
//                 <div>
                    
//                     </div> 
                
                
                
//                 <label className='lable'>
//                 <span className=' text-base label-text'>Password</span>
//                 </label>
//                 <input
//                 type='password' placeholder='Enter Password'
//                 className='w=full input input-bordered h-10'/>


        
//             </div>




//           </form>


//         </div>







//     </div>
//   )
// }

// export default Login

