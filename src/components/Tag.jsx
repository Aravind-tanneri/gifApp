import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';


const Tag = () => {

    const [tag, setTag] = useState('car');
    const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className='lg:w-1/2 lg:min-h-[450px] bg-blue-500 rounded-xl w-9/10 border border-black
    flex flex-col items-center gap-y-5 mt-[15px] justify-between'>
        <h1 className='mt-[15px] text-xl justify-center md:text-2xl underline uppercase font-bold text-center px-1'> Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>) : (<img src={gif} width="400px"  className='max-h-[400px]' alt='gif' />)
        }

        <div className='flex-col flex gap-5 w-full items-center'> <input className='w-10/12 text-lg border py-2 rounded-lg mb-[3px] text-center max-w-70 outline-none text-white capitalize' onChange={(e)=>setTag(e.target.value)} type="text" value={tag}/>

        <button onClick={()=>fetchData(tag)} className="w-10/12 bg-yellow-300 shadow-md hover:shadow-lg max-w-70 transition-all duration-200 text-lg py-2 rounded-lg mb-[20px] uppercase font-medium tracking-wide">Generate</button>
    </div></div>
  )
}

export default Tag
