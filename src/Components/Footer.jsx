import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-950 flex-col justify-center items-center text-white'>
      <div className="  ">
          <h1 className="text-xl font-bold text-center p-4">
            <span className="text-yellow-400">&lt;</span >
            Key<span className="text-yellow-400">Fortress/ &gt;</span>
          </h1>
          <p className="text-black text-sm text-center">
            .
          </p>
        </div>

        <div className='flex text-center justify-center text-yellow-100 text-sm gap-4 py-1'>
            CopyRight &#169; Arpit Kashyap
        </div>
    </div>
  )
}

export default Footer
