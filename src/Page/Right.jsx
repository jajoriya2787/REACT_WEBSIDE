import React, { useState } from 'react'
import Shopcard from './Shopcard'
import { FaRockrms } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Right({ productdata, slug, limit, setlimit, lording, setlording ,setmenu ,menu }) {
   const [open ,setopen] = useState (false)
  return (
    <>

      <div className='w-[75%] flex flex-wrap gap-3 p-2 max-[660px]:mx-auto pt-16 reletive'>
        <div className='absolute top-[90px] text-blue-500 text-xl font-semibold border-2 p-2 rounded-lg border-blue-100 '>itams : {limit} &nbsp;
          <span className='text-green-500'>
            {slug == undefined ? "All Catogory" : slug}
          </span>
        </div>

        {
          productdata.map(
            (value, index) => {
              return lording == true ? (
                <div key={index} className="border border-gray-200 rounded-xl p-4 animate-pulse shadow-sm w-full max-w-[250px]">
                  <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                </div>
              ) : (
                <Shopcard value={value} key={index} />
              )
            }
          )
        }

        <div className='w-full flex mt-6 justify-center '>
          <button onClick={() => setlimit(limit + 5)} className='flex rounded bg-green-500 text-white hover:bg-green-700 h-10 p-2'>Show more itams</button>
        </div>
      </div>
      <div>
      <div className="block sm:hidden fixed z-10 bottom-36 right-6">
        <FaRockrms onClick={()=>setopen(!open)} className='text-gray  bg-green-800 rounded-3xl text-[50px]' />
      </div>

      {// yh open true hone par show hoga list
        open && (
       <div className="fixed bottom-48 right-10 bg-black shadow-xl h-auto rounded-xl max-h-80 overflow-y-scroll p-4 z-20 border w-60">
          <ul className="flex flex-col gap-2">
             <Link to={`/shop`}>
                    <li onClick={()=>setopen(false)} className="p-2 rounded border border-blue-500 text-blue-500 m-1 duration-500">All Catagorys.....</li>
                    </Link>
            {
              menu.map(
                (value,index)=>{
                  return(
                    <Link  key={index} to={`/shop/${value}`}>
                    <li onClick={()=>setopen(false)} className="p-2 rounded border border-blue-500 text-blue-500 m-1 duration-500">{value}</li>
                    </Link>
                  )
                }
              )
            }
          </ul>
        </div> 
        )
      }

      </div>
    </>
  )
}

export default Right