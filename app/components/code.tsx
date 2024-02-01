"use client";
import React from 'react'
import Image from "next/image";

 function code

() {
  return (
    <div className="flex flex-wrap justify-evenly bg-slate-300">
<div>
<Image src={'https://www.pexels.com/photo/woman-wearing-black-top-3770254/'} alt='image'width={300} className="w-32 h-32 rounded-full object-cover"/>
<h3 className="font-semibold text-lg">ASMA</h3>
<p>Python developer</p>
</div>

<div>
<Image src= {'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=400'} alt='image'width={300} className="w-32 h-32 rounded-full object-cover"/>
<h3 className="font-semibold text-lg">Sadaf</h3>
<p>Typescript developer</p>
</div>

<div>
<Image src={'https://www.pexels.com/photo/woman-in-red-crew-neck-shirt-wearing-black-knit-cap-3797837/'} alt='image'width= {300} className="w-32 h-32 rounded-full object-cover"/>
<h3 className="font-semibold text-lg">Tahira</h3>
<p>Next.js</p>
</div>

        
    </div>
  )
}


