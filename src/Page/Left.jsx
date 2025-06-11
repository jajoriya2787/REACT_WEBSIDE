import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DiScriptcs } from 'react-icons/di';
import { Link } from 'react-router-dom'


function Left({ slug, rating, setrating, setprice, price, setmenu ,menu }) {

  const [catogarydata, setcatogarydata] = useState([]);

  const catagoyname = () => {
    axios.get('https://dummyjson.com/products/category-list').then(
      (success) => {
        setcatogarydata(success.data)
        setmenu(success.data)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )

  }

  const inc=(event)=> {
    setprice({...price ,from : event.target.value});
  }

  const Dcri=(event)=> {
       setprice({...price ,to : event.target.value});

  }

  useEffect(
    () => {
      catagoyname()
    }, []
  )

  return (
    <div className='w-[25%] p-4 rounded-2xl border border-blue-200 hidden  sm:block '>

      <h3 className='text-xl text-blue-600 font-semibold'>Show All Reting</h3>
      <div className={`border p-3 rounded-xl my-2 text-[white] bg-blue-600 border-blue-200 cursor-pointer text-[20px] ${rating == 1 ? 'bg-green-600' : ''}`}
        onClick={() => setrating(1)}
      >
        1 reting ⭐ & above
      </div>
      <div className={`border p-3 rounded-xl my-2 text-[white] bg-blue-600 border-blue-200 cursor-pointer text-[20px]  ${rating == 2 ? 'bg-green-600' : ''}`}
        onClick={() => setrating(2)}
      >
        2 reting ⭐ & above
      </div>
      <div className={`border p-3 rounded-xl my-2 text-[white] bg-blue-600 border-blue-200 cursor-pointer text-[20px]  ${rating == 3 ? 'bg-green-600' : ''}`}
        onClick={() => setrating(3)}
      >
        3 reting ⭐ & above
      </div>
      <div className={`border p-3 rounded-xl my-2 text-[white] bg-blue-600 border-blue-200 cursor-pointer text-[20px]  ${rating == 4 ? 'bg-green-600' : ''}`}
        onClick={() => setrating(4)}
      >
        4 reting ⭐ & above
      </div>

      <h3 className='text-xl text-blue-600 font-semibold'>filter by Price</h3>
      <div className='flex'>
        <input onChange={inc} type="number" className='border border-gray-300 m-2 p-1 rounded-xl w-[25%]' value={price.from} />
        <p className='text-gray-600'>
          to
        </p>
        <input onChange={Dcri} type="number" className='border border-gray-300 m-2 p-1 rounded-xl w-[25%]' value={price.to} />
      </div>


      <h3 className='text-xl text-blue-600 font-semibold'>All Catogary</h3>

      <Link to={'/shop'}>
        <h3 className={`border border-blue-200 rounded-xl p-2 text-lg my-2 ${slug == undefined ? 'bg-blue-500  text-white ' : ''}cursor-pointer`}>Show All Catogary</h3>
      </Link>
      <div className='border border-blue-200 rounded p-4 h-[500px] overflow-y-scroll'>
        {
          catogarydata.map(
            (li_value, li_index) => {
              return (
                <Link key={li_index} to={`/shop/${li_value}`}>
                  <div className={`border border-blue-200 rounded-xl p-2 text-lg my-2 ${li_value == slug ? ' text-white bg-blue-500' : ''} cursor-pointer`}>
                    {li_value}
                  </div>
                </Link>
              )
            }
          )
        }
      </div>

    </div>
  )
}

export default Left