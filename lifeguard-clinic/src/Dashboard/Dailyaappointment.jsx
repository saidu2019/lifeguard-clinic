import React,{useState,useEffect} from 'react'

const Dailyaappointment=()=> {
 const [Text, setText]=useState(0)
 const changeText=[
 'Welcome To',
 'LifeGuard Clinic',
 'Provide You with',
 'The Best Medical',
 'Treatment',
 'Consultation',
 'Medical Testes'
 ]
 useEffect(()=>{
   const textInteval= setInterval(()=>{
     setText((preIndex)=>(preIndex +1) % changeText.length)
      // change each 3000 milllseconds== 3s
   },3000)
  // to clear  time for the changeText
   return() => clearInterval(textInteval)
 },[changeText, changeText.length])

  return ( 
    <div className="dailyappointment">
      <aside className="dailyupdates flex justify-around items-center">
           <div className="data-time"></div>
        <div className="Dec-onsappointment
            w-[500px] h-[130px] px-4 ml-8
            bg-blue-500 border-l-4  border-purple-600
            flex justify-between
             items-center gap-5 rounded-2xl">
            <div className="text flex justify-center
             pl-2 w-[200px] h-[40px] 
             items-center text-white font-serif font-bold">
             {changeText[Text]}
             </div>
            <img src="../images/medicalDoc.jpeg" 
            className="imgd w-60 h-[120px]  rounded-2xl" 
            alt='Doc'/>
        </div>
      </aside>
    </div>
  )
}

export default Dailyaappointment