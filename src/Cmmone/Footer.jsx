import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="bg-blue-200 shadow-inner mt-10">
                <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
                        {/* Logo + Description */}
                        <div>
                            <h2 className="text-xl font-bold text-blue-600 mb-2">MyLogo</h2>
                            <p className="text-sm">
                                Quality products, excellent service. Your one-stop shop.
                            </p>
                        </div>
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <Link to={'/'} className="hover:text-blue-500">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/about'} className="hover:text-blue-500">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/shop'} className="hover:text-blue-500">
                                        Shop
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Support</h3>
                            <ul className="space-y-1 text-sm">
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">
                                        Returns
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Social Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4 text-xl">
                                <a href="#" className="hover:text-blue-500">
                                    🌐
                                </a>
                                <a href="#" className="hover:text-blue-500">
                                    📘
                                </a>
                                <a href="#" className="hover:text-blue-500">
                                    🐦
                                </a>
                                <a href="#" className="hover:text-blue-500">
                                    📸
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Footer */}
                    <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
                        © 2025 MyLogo. All rights reserved.
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer