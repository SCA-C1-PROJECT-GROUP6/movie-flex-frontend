// // import React from 'react';
// import Logo from "/logo.svg";

// const Footer = () => {
//     return (
//         <footer className="bg-black text-white py-8">
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
//                 <div className="flex flex-col justify-center items-center md:items-start">
//                     <img src={Logo} alt="logo" className="mb-4" />
//                 </div>
//                 <div>
//                     <ul className="space-y-4">
//                         <li><a href="#" className="hover:underline">Home</a></li>
//                         <li><a href="#" className="hover:underline">Movie</a></li>
//                         <li><a href="#" className="hover:underline">About Us</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <ul className="space-y-4">
//                         <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
//                         <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//                         <li><a href="#" className="hover:underline">Contact Us</a></li>
//                     </ul>
//                 </div>
//                 <div className="mt-8 md:mt-0 md:ml-8">
//                     <h3 className="text-lg font-semibold mb-4 whitespace-nowrap">Subscribe to the Newsletter</h3>
//                     <form className="flex flex-col space-y-4">
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="w-full p-2 rounded-md text-gray-800 outline-none"
//                         />
//                         <button
//                             type="submit"
//                             className="self-start bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-md"
//                         >
//                             Subscribe
//                         </button>
//                     </form>
//                     <div className="flex justify-between mt-4 w-full">
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                             <img src="/google-icon.svg" alt="Instagram" className="h-6 w-6" />
//                         </a>
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                             <img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="container mx-auto mt-8 px-4 pt-4 text-center border-t border-gray-700">
//                 <p className="mb-4">Copyright &copy; MOVIEFLEX 2024. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

// import React from 'react';
import Logo from "/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <img src={Logo} alt="logo" className="mb-4" />
                </div>
                <div>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Movie</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div className="mt-8 md:mt-0 md:ml-auto">
                    <h3 className="text-lg font-semibold mb-4 whitespace-nowrap">Subscribe to the Newsletter</h3>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-2 rounded-md text-gray-800 outline-none"
                        />
                        <button
                            type="submit"
                            className="self-end bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded-md ml-auto"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex justify-start space-x-4 mt-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/google-icon.svg" alt="Instagram" className="h-6 w-6" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 px-4 pt-4 text-center border-t border-gray-700">
                <p className="mb-4">Copyright &copy; MOVIEFLEX 2024. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
