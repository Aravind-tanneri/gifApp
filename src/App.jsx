import React from 'react'
import Tag from "./components/Tag"
import Random from "./components/Random";


const App = () => {
  return (
    <div className='w-full min-h-screen p-8 flex flex-col background relative items-center overflow-x-hidden'>
      
      {/* title */}
      <h1 className='bg-white uppercase rounded-xl text-center max-w-[1080px] w-full px-10 py-3 text-xl lg:text-3xl font-bold'>Random gifs</h1>

      {/* the cards */}
      <div className='flex flex-col lg:flex-row max-w-[1080px] gap-x-4 lg:h-50vh w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>


    </div>
  )
}

export default App;
