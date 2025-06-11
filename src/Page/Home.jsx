import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <>
                {/* Hero Banner */}
                <section className="bg-blue-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">
                            Step into Style
                        </h1>
                        <p className="text-gray-700 mb-6">
                            Discover the latest trends in fashion for every season.
                        </p>
                        <Link to={'/shop'}
                            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
                        >
                            Shop Now
                        </Link>
                    </div>
                </section>
                {/* Categories */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            <div className="bg-white p-4 rounded shadow hover:shadow-md">
                                👗 Dresses
                            </div>
                            <div className="bg-white p-4 rounded shadow hover:shadow-md">
                                👕 T-Shirts
                            </div>
                            <div className="bg-white p-4 rounded shadow hover:shadow-md">
                                👠 Shoes
                            </div>
                            <div className="bg-white p-4 rounded shadow hover:shadow-md">
                                👜 Bags
                            </div>
                        </div>
                    </div>
                </section>
                {/* Popular Products */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded shadow hover:shadow-lg p-4">
                               <div className="h-40 bg-blue-200 mb-4 rounded">
                                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                </div>
                                <h3 className="font-semibold mb-1">Stylish Jacket</h3>
                                <p className="text-sm text-gray-500">₹2,499</p>
                            </div>
                            <div className="bg-white rounded shadow hover:shadow-lg p-4">
                                <div className="h-40 bg-blue-200 mb-4 rounded">
                                    <img src="https://cdn.pixabay.com/photo/2013/03/27/12/21/woman-97088_1280.jpg" alt="" />
                                </div>
                                <h3 className="font-semibold mb-1">Elegant Dress</h3>
                                <p className="text-sm text-gray-500">₹1,799</p>
                            </div>
                            <div className="bg-white rounded shadow hover:shadow-lg p-4">
                                <div className="h-40 bg-blue-200 mb-4 rounded">
                                    <img src="https://img.freepik.com/free-photo/girl-checking-blouse-mirror_23-2148225635.jpg" alt="" />
                                </div>
                                <h3 className="font-semibold mb-1">Classic Heels</h3>
                                <p className="text-sm text-gray-500">₹2,099</p>
                            </div>
                            <div className="bg-white rounded shadow hover:shadow-lg p-4">
                                <div className="h-40 bg-blue-200 mb-4 rounded">
                                    <img src="https://cdn.shopify.com/s/files/1/0095/7602/2078/files/ban2_600x600.jpg?v=1618478010" alt="" />
                                </div>
                                <h3 className="font-semibold mb-1">Trendy Bag</h3>
                                <p className="text-sm text-gray-500">₹999</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Newsletter */}
                <section className="py-12">
                    <div className="max-w-2xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <p className="text-gray-600 mb-6">
                            Get the latest fashion updates and offers.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 border border-gray-300 rounded w-full sm:w-auto"
                            />
                            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </>

        </div>
    )
}

export default Home