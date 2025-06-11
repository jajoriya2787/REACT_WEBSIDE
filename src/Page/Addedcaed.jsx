import React, { useContext } from 'react'
import { Context } from '../Context/Contextmain'
import { Link } from 'react-router-dom';
// Shopcard.jsx में
import { toast } from 'react-toastify';


function Addedcaed() {
  const { card, setcard  } = useContext(Context);

  const Allitamsdelet=()=>{//fuction tab chalega jab  all card ek sath delet karna h
    setcard([]);
    toast.error("🗑️All Product removed from cart!");
  }

  //price & qty ke liy

  let totalqty = 0;
  let tatolprice = 0;

  for(let i = 0 ; i < card.length ; i++){
    const itam = card[i]; //card ke index ke anusar click par card ki value itam me save hogi
    const quntity = itam.qty || 1 ;

    totalqty += quntity;
    tatolprice += itam.price * quntity

  }


  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:items-start gap-4 px-4 md:px-8 py-6'>
      <div className='flex flex-col gap-4 w-full md:w-2/3'>
        {
          card.length > 0 ? (
            card.map((value, index) => (
              <AddedCardValue key={index} value={value} index={index} card={card} setcard={setcard} />
            ))
          ) : (
            <div className="text-center mt-20 text-xl text-gray-500 animate-pulse inline-block transition-all duration-300 w-full">
              <div className="flex justify-center items-center h-[60vh] px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center border border-blue-200 animate-fade-in-down">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                    alt="Empty Cart"
                    className="w-24 mx-auto mb-4 opacity-80"
                  />
                  <h2 className="text-2xl font-semibold text-gray-800">Your cart is empty</h2>
                  <p className="text-gray-600 mt-2 mb-6">
                    Looks like you haven’t added any items yet. Start shopping now!
                  </p>
                  <Link to={'/shop'} className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition">
                    🛒 Go to shop page
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </div>

      {/* Right Side */}
      {card.length > 0 && (
        <div className="w-full sticky top-20 md:w-1/3 bg-gray-50 p-4 rounded-xl shadow-inner space-y-4 border h-auto border-blue-200">
          <h3 className="text-xl font-semibold border-b pb-2 text-green-600">Product Summary</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <span className="font-medium">Items in Cart :</span> {card.length}
            </li>
             <li>
              <span className="font-medium">Product qty :</span> {totalqty}
            </li>
            <li className='font-bold'>
              <span className="font-medium text-green-700 text-xl">Total Price:</span>$ {tatolprice.toFixed(2)}
            </li>
             <li className='font-bold'>
               <button onClick={Allitamsdelet} className="m-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Remove all itams
            </button>
            <button className="px-4 m-2 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              Order now 
            </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Addedcaed

const AddedCardValue = ({ value, index, card, setcard }) => {
  const deletholder = (index) => {
    const updatedCard = [...card];
    updatedCard.splice(index, 1);
    toast.error("🗑️ Product removed from cart!");
    setcard(updatedCard);
  }

  const qtyupdate=(event ,index)=>{
    const updata = parseInt(event.target.value) || 1; //yha par es ek ka matlab iput ki value 1 ke brabar hote hi input value 0 nhi hogi
    const updatacard = [...card];
    updatacard[index].qty = updata;
    setcard(updatacard);
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-blue-200 w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={value.thumbnail}
            alt="Product Image"
            className="w-full h-50 object-cover rounded-lg border"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-2">
          <h2 className="text-xl text-green-700 font-bold">{value.title}</h2>
          <p className="text-sm text-gray-600">{value.description}</p>
          <div className="text-sm text-gray-700">
            <p><span className="font-medium">Category:</span> {value.category}</p>
            <p>
              <span className="font-medium">Qty: 
              <input type="number" onChange={(event)=>qtyupdate(event ,index)} className='p-1 m-2 w-10 border rounded-md' value={value.qty} />
            </span>
            </p>
            <p><span className="font-medium">Price:</span> ${value.price} each</p>
            {/* <p><span className="font-medium">Total:</span> ${value.price * value.qty}</p> */}
          </div>
          <div className="flex gap-2 pt-2">
            <button onClick={() => deletholder(index)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              Remove
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
