import React from 'react';
import logo from  "../../assets/logo.svg"
import wa from  "../../assets/whatsApp.svg"
import ig from  "../../assets/instagram.svg"
import fb from  "../../assets/facebook.svg"

export default function Footer() {
    return (
        <div>
            <footer className="bg-primary">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-bold text-white">EasyKos</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Product</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline">Made-In Purwokerto</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Exlusive Style</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">About Us</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Gallery</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white">Privacy & Terms</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">EasyKos</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                               <img src={wa} alt="" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <img src={ig} alt="" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <img src={fb} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}