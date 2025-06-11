import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Contextmain';
import { toast } from 'react-toastify';


function Shopcard({ value }) {

    const { card, setcard } = useContext(Context);//button click par add card ke number incre karne ke liy

    const addtocard = () => {

        const { id, thumbnail, description, title, category, price } = value //yha mane value ke object me se important thing use kar li
        // ab hamne ese object me save kar diya h
        const valuedeteails = { id, thumbnail, description, title, category, price, qty: 1 }
        //ab ham card me jo data tha uske sath hi new data esme dalwa denge

        let Quantity = null;
        for (let qtyitams of card) {
            if (qtyitams.id === id) {
                Quantity = qtyitams;
            }
        }

        if (Quantity) {

            let qtyprod = [];
            for (let qtyitams of card) {
                if (qtyitams.id === id) {
                    qtyprod.push({
                        ...qtyitams, qty: qtyitams.id + 1
                    })
                }
                else {
                    qtyprod.push(qtyitams)
                }
            }
            toast.info("🔁 Alread added in cart!");
            setcard(qtyprod);
        }
        else {
            // नया प्रोडक्ट add करो
            toast.success("🛒 Product added to cart!");
            setcard([...card, valuedeteails]);
        }

    };

    return (
        <>
            <div className="w-80 max-h-[650px] mt-8 rounded-2xl shadow-lg overflow-hidden relative bg-white border border-gray-200">
                <link to={`/prodata/${value.id}`} />
                <div className="relative">
                    <img
                        src={value.thumbnail}
                        alt="Product"
                        className="w-full h-66 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
                        50% OFF
                    </div>
                </div>
                <div className="p-4 space-y-3">
                    <link to={`/prodata/${value.id}`} />
                    <h2 className="text-xl font-bold text-gray-800">
                        {value.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        {value.description}
                    </p>
                    <div className="flex items-center space-x-1 text-yellow-400">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="text-gray-300">★</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-extrabold text-green-600">
                            $ {value.price}
                        </span>
                        <button
                            onClick={addtocard}
                            className="rounded-full px-4 py-2 text-sm bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 shadow"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shopcard