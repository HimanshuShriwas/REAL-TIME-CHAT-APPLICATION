// const Gender = () => {
//     return (
//       <div className='flex'>
//         <div className='form-control'>
//           <label className='label gap-2 cursor-pointer'>
//             <span className='label-text'>Male</span>
//             <input type='checkbox' className='checkbox border-slate-900'/>
//           </label>
//         </div>
//         <div className='form-control'>
//           <label className='label gap-2 cursor-pointer'>
//             <span className='label-text'>Female</span>
//             <input type='checkbox' className='checkbox border-slate-900'/>
//           </label>
//         </div>
//       </div>
//     );
//   };
  
//   export default Gender;



import React, { useState } from 'react';

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState('');

  return (
    <div className='flex'>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Male</span>
          <input
            type='radio'
            name='gender'
            value='male'
            checked={selectedGender === 'male'}
            onChange={(e) => setSelectedGender(e.target.value)}
            className='radio border-slate-900'
          />
        </label>
      </div>
      <div className='form-control'>
        <label className='label gap-2 cursor-pointer'>
          <span className='label-text'>Female</span>
          <input
            type='radio'
            name='gender'
            value='female'
            checked={selectedGender === 'female'}
            onChange={(e) => setSelectedGender(e.target.value)}
            className='radio border-slate-900'
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;