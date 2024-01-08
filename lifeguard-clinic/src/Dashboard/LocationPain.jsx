import React,{useState, useEffect} from 'react'
const LocationPain=()=>{
  const[change, setChangeImage ]=useState(0)
  const malePart='male';
  const femalePart='female';

  const image=[
   'https://static.vecteezy.com/system/resources/previews/024/320/544/original/full-human-body-anatomy-3d-rendering-anatomical-drawing-body-muscular-system-sketch-drawing-generate-ai-free-png.png',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Digestive_system_simplified.svg/1359px-Digestive_system_simplified.svg.png',
   'https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-full-human-body-anatomy-3d-rendering-anatomical-drawing-body-muscular-system-png-image_10150421.png'
  ]
  useEffect(()=>{
  const imageIterval=setInterval(()=>{
    setChangeImage((preIndex)=>(preIndex + 1) % image.length)
  },4000)
  return() => clearInterval(imageIterval)
  },[change,image.length])

  return (
    <section className='app-container'>
      <p className='app-botton flex justify-center gap-8 mt-5 '>
        <button className='btn1 w-20 h-10 bg-blue-500 text-white rounded-xl hover:bg-slate-600'>
        {malePart}
        </button>
        <button className='btn2 w-20 h-10 bg-blue-500  text-white rounded-xl  hover:bg-slate-600'>
        {femalePart}
        </button>
      </p>
     <img src={image[change]}  alt={`image ${ change + 1}`}
      className='w-60 h-80 flex m-auto mt-10'/>
      
    </section>
  )
}

export default LocationPain