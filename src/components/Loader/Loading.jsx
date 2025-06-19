import React from 'react'
import './Loading.css'
import { RiGeminiFill } from 'react-icons/ri'
function Loading() {
  return (
    <>
      <div className="loader-container">
         <RiGeminiFill className='user-icon' />
        <div>
          <div className="loading-bar">
            <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
          </div>

          <div className="loading-bar">
            <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
          </div>

          <div className="loading-bar">
            <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
          </div>

          <div className="loading-bar">
            <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
          </div>
        </div>


      </div>
    </>


  )
}

export default Loading

/* 
 <>
      <div class="loading-bar">
        <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
      </div>

      <div class="loading-bar">
        <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
      </div>

      <div class="loading-bar">
        <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
      </div>

      <div class="loading-bar">
        <div className="h-5 w-11/12 origin-left animate-loading rounded-sm bg-gradient-to-r from-blue-50 via-blue-500/60 to-blue-50 bg-[length:200%] opacity-0" />
      </div>
    </>
*/ 