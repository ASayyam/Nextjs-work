
import Link from "next/link";
import { count } from "node:console";
// import code from "code"
import React from "react";

export default function () {
  return (
    <>
      <div className="flex bg-teal-500 max-w-4xl m-10 p-5 rounded-xl mx-auto">
        <div className="bg-gradient-to-br from-lime-500 to bg-amber-300 p-5 rounded">
          <p className="tracking-wide leading-9">
            'Time is precious, so spend it wisely'
          </p>
          <h1 className="italic underline uppercase"> Asma</h1>
        </div>

        <div className="bg-gradient-to-br from-lime-500 to bg-amber-300 p-11 rounded-full">
          <p className="tracking-wide leading-9">
            The parents' prime responsibility is to raise their kids well enough
            to face the challenges of life'
          </p>
          <h1 className="italic underline uppercase">Sadaf</h1>
        </div>

        <div className="bg-gradient-to-br from-lime-500 to bg-amber-300 p-9 rounded-full">
          <p className="tracking-wide leading-9">
            'The person who stands by you at the time of adversity is actually
            the person who deserves your attention.'
          </p>
          <h1 className="italic underline uppercase">Tahira</h1>
        </div>
      </div>

      <div className="flex justify-evenly bg-red-300 rounded p-2">
        <div className="bg-white rounded-xl px-4 py-1">Profile</div>
        <div className="bg-white rounded-xl px-4 py-1">About</div>
        <div className="bg-white rounded-xl px-4 py-1">Content</div>
        <div className="bg-white rounded-xl px-4 py-1">Setting</div>
      </div>

      <div className=" shadow-black rounded-xl max-w-xs bg-slate-300 justify-center p-4 mt-4 items-center m-auto">
        <h1 className="flex text-2xl text-sky-700 justify-center">
          CSS Flex and Grid
        </h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore
          illum velit laudantium recusandae ut eius voluptatibus quo est natus.
        </p>

        <div className="flex justify-between mt-4">
          <button className="px-2 py-1 bg-black rounded text-white">
            Prev
          </button>
          <button className="px-2 py-1 bg-black rounded text-white">
            Next
          </button>
        </div>
        <div>
          <code />
        </div>
      </div>

      <div className="flex bg-blue-500 justify-center m-10">
        <div className="w-2/3 bg-blue-500 text-center justify-center max-w-4xl m-10 p-5 rounded-xl ">
          <h1 className="text-2xl font-extrabold font">
            WELCOME TO THE NORTH BY
          </h1>
          <h2>A Premium insight and sound</h2>
          <button className=" border border-slate-950 border-dashed rounded p-5 m-5 px-2 py-2 bg-blue-600 text-red-800 ">
            Learn more
          </button>
        </div>
        <div className="rounded-full">
          <img
            src="logo.jpg"
            alt="logo"
            width={200}
            height={100}
            className="rounded-full p-4 m-4"
          />
        </div>
      </div>
      <ul className="flex flex-col md:flex-row space-x-4 justify-center h-40 P-2 bg-green-500 items-center">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>

      <div className="flex flex-col bg-gray-200 m-40 h-[28rem] justify-center items-center ">
        <div>
          <Link
            href={"/"}
            className="  bg-blue-400 px-20 m-6 py-2 block text-white text-center"
          >
            {" "}
            Login
          </Link>
          <Link
            href={"/"}
            className="border-2 border-cyan-700 bg-white py-2 px-20 m-6"
          >
            Contact us
          </Link>
        </div>
      </div>


      <div className=" bg-black text-white even:flex-row-reverse even:text-right ">
<div className="flex ">

        <div className=" flex p-8 mt-0 " >
          <img 
          src="logo.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded"/>
        </div>
        <div>
          <h3 className="mt-14">Stranger</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, in corrupti. Illum laudantium qui esse odio est eaque fugit! Quae nulla, fugiat doloribus nesciunt veritatis modi debitis facilis deleniti vitae, quaerat perspiciatis, consequuntur odio aliquam.</p>
        </div>
        </div>


        <div className="flex">
        <div className=" p-8 mt-0" >
          <img 
          src="images1.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded"/>
        </div>
        <div>
          <h3 className="mt-14">Stranger</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, in corrupti. Illum laudantium qui esse odio est eaque fugit! Quae nulla, fugiat doloribus nesciunt veritatis modi debitis facilis deleniti vitae, quaerat perspiciatis, consequuntur odio aliquam.</p>
        </div>
        </div>
        
        <div className="flex">
        <div className=" p-8 mt-0" >
          <img 
          src="image2.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded"/>
        </div>
        <div>
          <h3 className="mt-14">Stranger</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, in corrupti. Illum laudantium qui esse odio est eaque fugit! Quae nulla, fugiat doloribus nesciunt veritatis modi debitis facilis deleniti vitae, quaerat perspiciatis, consequuntur odio aliquam.</p>
        </div>
        </div>

        <div className="flex">
        <div className=" p-8 mt-0" >
          <img 
          src="image3.jpg"
            alt="logo"
            width={100}
            height={100}
            className="rounded"/>
        </div>
        <div>
          <h3 className="mt-14">Stranger</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, in corrupti. Illum laudantium qui esse odio est eaque fugit! Quae nulla, fugiat doloribus nesciunt veritatis modi debitis facilis deleniti vitae, quaerat perspiciatis, consequuntur odio aliquam.</p>
        </div>
        </div>
      </div>

      <div className="flex bg-emerald-500 mt-8 p-5 justify-center max-w-6xl mx-auto">
<input type="email" placeholder="Enter your email" className="flex-grow-[2] px-4 bg-white py-2" />
<button type="submit" className="bg-teal-800 px-4 py-2 rounded-r-lg flex-grow-[1]">SUBSCRIBE</button>
<span className="bg-red-400 "> 10:00 am</span>
      </div>

<div className=" grid grid-cols-[20%,60%,20%] mt-40 h-96 font-extrabold  justify-center" >
<div className="bg-pink-300">1</div>
<div className="bg-green-200">2</div>
<div className="bg-blue-500">3</div>
<div className="bg-yellow-300">4</div>
<div className="bg-green-400">6</div>
<div className="bg-pink-600">7</div>

</div>
</>
  );
}







 


