import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context/Contextmain';

import { toast } from 'react-toastify';



function Prodata(value) {

  const { card, setcard } = useContext(Context);

  const [productcarddata, setproductcarddata] = useState({}); //click par ek hi productdata show hoga es liy esme object dala gya h
  const { proID } = useParams();
  // console.log(proID)//yha hme id shopcard ki value se aai h or hmene usse peram se nikali h

  const productdatails = () => {
    axios.get(`https://dummyjson.com/products/${proID}`).then(
      (success) => {
        setproductcarddata(success.data);
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

  useEffect(
    () => {
      productdatails();
    }, []
  )

  const addToCart = () => { //prodata ke add button par click karne par yh fuction run hoga
    const { id, title, price, description, category, images ,thumbnail} = productcarddata;

    const productToAdd = {
      id, title, price, description, category, thumbnail: images?.[0], //first image
      qty: 1
    };


    let existingProduct = null;
    for (let itams of card) {
      if (itams.id === id) {
        existingProduct = itams; //yha itams ki value existingProduct me aa chuki h
      }
    }


    if (existingProduct) {

      let Qtyproduct = [];
      for (let itams of card) {
        if (itams.id === id) {
          Qtyproduct.push({
            ...itams, qty: itams.qty + 1
            //ek se jyada product hone par qty bade
          })
        }
        else {
          Qtyproduct.push(itams)
        }
      }

      setcard(Qtyproduct);
      toast.info("🔁 Alread added in cart!");

    } else {
      // नया प्रोडक्ट add करो
      setcard([...card, productToAdd]);
      toast.success("🛒 Product added to cart!");
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 m-5 ">

      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-6">

        {/* Left: Images */}
        <div className="w-full md:w-1/2 ">
          <img
            src={productcarddata.images}
            alt="Main"
            className="w-full h-100 object-cover rounded-xl"
          />
          <div className='flex gap-4'>
            {
              productcarddata?.images?.map(
                (value, index) => {
                  return (
                    <div key={index} className="flex gap-2 mt-4 overflow-x-auto">
                      <img
                        src={value}
                        alt=""
                        className='h-20 w-20 rounded-lg object-cover cursor-pointer border-2'
                      />
                    </div>
                  )
                }
              )
            }

          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{productcarddata?.title}</h1>
            <p className="text-sm text-gray-600 mt-2 font-medium">Rating : <span className='text-green-500'> $ {productcarddata?.price}</span></p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Category :  {productcarddata?.category}</p>
            <p className="text-sm text-gray-600 mt-2 font-medium">Stock :  {productcarddata?.stock}</p>
            <p className="text-sm text-gray-400 mt-2 font-medium">Brand : {productcarddata?.brand}</p>
            <p className="text-sm text-green-600 mt-2 font-medium">ReturnPolicy :  {productcarddata?.returnPolicy}</p>
            <p className="text-gray-600 mt-4">{productcarddata?.description}</p>
          </div>

          <div className="mt-6">
            <button onClick={addToCart} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-8 border-t pt-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Reviews</h2>

        {
          productcarddata.reviews?.map(
            (value, index) => {
              return (
                <div key={index} className="space-y-2 my-2">
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <p className="text-sm text-gray-800">
                      <strong>{value.reviewerName}</strong> — <span className="text-yellow-500">⭐ {value.rating}</span>
                    </p>
                    <p className="text-gray-600 text-sm mt-1">{value.comment}</p>
                    <p className="text-sm mt-1 text-green-700">{value.date}</p>
                  </div>
                </div>
              )
            }
          )
        }

      </div>
    </div>
  );
}

export default Prodata;
