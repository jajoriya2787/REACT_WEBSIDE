import React, { useEffect, useState } from 'react'
import Left from './Left'
import Right from './Right'
import axios from 'axios'
import { useParams } from 'react-router-dom'
 
import { toast } from 'react-toastify';



function Shop() {
  const [productdata, setproductdata] = useState([]);
  const [limit ,setlimit] = useState(10);
  const [rating ,setrating] = useState(1);
  const [price ,setprice] = useState({from:0 , to :1000});
  const [lording , setlording] = useState(true);
  const [menu , setmenu] = useState([]);
  
  const { slug } = useParams();

  const dataapi = () => {

    let apiurl;
  if (slug == undefined) {
  apiurl = `https://dummyjson.com/products?limit=${limit}`;
} else {
  apiurl = `https://dummyjson.com/products/category/${slug}?limit=${limit}`;
}

    axios.get(apiurl).then(
      (success) => {
        //rating ke liy verebule bnaya gya h
        const fainaldata = success.data.products.filter(
          (value,index)=>{
            if(value.rating >= rating && value.price >=price.from && value.price <=price.to){
              return true;
            }
          }
        )
        setproductdata(fainaldata) // rating ke bad
        // setproductdata(success.data.products) //yh rating ke pahale tha 
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(
    () => {
      setlording(true);
      dataapi()
      setTimeout(
        ()=>{
          setlording(false)
        },1000
      )
    }, [slug ,limit ,rating, price ,lording]
  )

  return (
    <>
      <div className='flex p-4 gap-6'>
        
        <Left setmenu={setmenu} menu={menu} slug={slug} rating={rating}  setrating={setrating} setprice={setprice} price={price} />
        <Right setmenu={setmenu} menu={menu}  slug={slug} rating={rating} productdata={productdata} limit={limit} setlimit={setlimit}  price={price}  setlording={setlording} lording={lording} />
      </div>
      
    </>
  )
}

export default Shop