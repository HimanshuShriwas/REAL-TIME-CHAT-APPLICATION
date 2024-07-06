import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import {Timessages} from "react-icons/ti"
// import NoChatSelected from './NoChatSelected'; // Ensure this import is correct

const MessageContainer = () => {
//   const noChatSelected = true;
  
  return (
    <div className='md:min-w-[450px] flex flex-col h-full'>
      {/* {noChatSelected ? (
        <NoChatSelected />
      ) : ( */}
        <>
          {/* Header */}
          <div className='bg-slate-500 px-4 py-3.5 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-green-900 font-bold'>John Smile</span>
          </div> 
          <div className='flex-1 overflow-auto'>
            <Messages />
          </div>
          <MessageInput />
        </>
      {/* )}  */}
    </div>
  );
}

export default MessageContainer;



const NoChatSelected =() =>{
    return (
        <div className='flex item-center justify-center w-full h-full' >
            <div className='px-4 text-center sm-text-lg md:text-xl text-grey-200 font-semibold flex flex-col items-center gap-2'>

                <p>Welcome John Doe </p>
                <p>selected a chat to start Messaging</p>
                <Timessages className='text-3xl md:text-6*1 text-center'/>
            </div>
        </div>
    )
}
