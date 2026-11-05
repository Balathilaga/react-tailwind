import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Products from './Components/Products'

function App() {

  return (
  // <div className="min-h-screen flex items-center justify-center bg-gray-100">

  //     <div className="bg-white w-80 p-6 rounded-2xl shadow-lg text-center">

      
  //       <img
  //         src="https://i.pravatar.cc/150?img=47"
  //         alt="Profile"
  //         className="w-28 h-28 rounded-full mx-auto mb-4"
  //       />

      
  //       <h1 className="text-2xl font-bold text-black-800">
  //         BALATHILAGA
  //       </h1>

      
  //       <h2 className="text-blue-500 font-semibold mt-2">
  //         Frontend Developer
  //       </h2>

    
  //       <p className="text-gray-500 mt-3 text-sm">
  //         Passionate developer who loves creating
  //         beautiful and user-friendly websites.
  //       </p>

      
  //       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-5 hover:bg-blue-700">
  //         Follow
  //       </button>

  //     </div>

<>
  <Navbar />
  <Products />
</>



  );

}


export default App
