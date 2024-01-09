import './Doctors.css'
import Radiologis from './Radiologis '
import React,{useState,useEffect} from 'react'

const Doctors=()=>{
  const [consultantname, setConsultantName]= useState(0)
  const [consultantimage, setConsultantImage]=useState(0)
  const [doctors, setDoctorsName]=useState(0)


    {/*consulant occupation*/}
  const consultants=['Cardiologist',
                     'Psychologist',
                      'Dentistry',
                      'Radiologist'
                      ]
    
     {/*consulant image*/}
  const imageConsultant= ['https://img.freepik.com/premium-photo/doctor-happy-man-portrait-studio-with-smile-from-success-motivation-stethoscope-happiness-medical-consultant-hospital-worker-with-gray-background-smiling-about-health-vision_590464-169717.jpg',
  'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
   'https://www.shutterstock.com/image-photo/young-asian-female-doctor-standing-600nw-2138546201.jpg',
    'https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo=']

  {/*doctors name*/}

  const docName=['Satiya Manaf',
              'Mary Green',
              'Faith Jeo',
               'Abdulaziz Isyaka']


useEffect(()=>{
    const consultantTimeInverval= setInterval(()=>{
      setConsultantName((preIndex)=>(preIndex + 1) % consultants.length)
    },3000)
    return()=>clearInterval(consultantTimeInverval)
    
},[consultantname,consultants.length])

useEffect(()=>{
  const ConsultantImagesInterval= setInterval(()=>{
    setConsultantImage((preIndex)=>(preIndex + 1) % imageConsultant.length)
  },3000)
  return()=>clearInterval(ConsultantImagesInterval)
  
},[consultantimage,imageConsultant.length])

useEffect(()=>{
     const doctorNameInterval = setInterval(() => {
      setDoctorsName((preIndex)=>(preIndex + 1) % docName.length)
     },3000)
     return()=>clearInterval(doctorNameInterval)
},[doctors,docName.length])

  return (

    <div className='doc-container'>
      <div className='consultation-container
      flex justify-center items-start flex-col'>
      <menu className='date-appointment 
      flex justify-start items-start flex-col
      bg-white  w-[95%] h-[150px] rounded-[20px] '>
        {/*appointment for for consultant*/}
      <div className='time-duration  bg-blue-500 w-[100%] h-[60px]
         text-white pl-4 py-2  outline-none rounded-br-2xl rounded-bl-2xl flex justify-between flex-row '>
          <div className='date'>
        <h5 className='appointment-rqs text-sm'>Appointment Request</h5>
        <h3 className='appointment-date '>7 jan 2024 8am - 10am</h3>
        </div>
        <div className='box-holders flex justify-center items-start gap-1 pr-2 '>
          <div className='box w-[10px] h-[10px] bg-yellow-500 rounded-full'></div>
          <div className='box  w-[10px] h-[10px]  bg-yellow-500 rounded-full'></div>
          <div className='box  w-[10px] h-[10px]  bg-yellow-500 rounded-full'></div>
        </div>
      </div>
      {/*consultant name and -- */}
       <div className='consultant-name flex justify-around items-center flex-row gap-40 mt-3 p-4'>
        <div className='photo-name-occupation flex justify-center items-start flex-row'>
        <img src={imageConsultant[consultantimage]} className=' w-[60px] h-[60px] rounded-full  border-blue-500 border-2' alt={`image${consultantimage + 1}`}/>
        <div className='name-occupation flex justify-start flex-col gap-1 pl-2'>
          <h2 className='name font-bold'>Dr.{docName[doctors]} </h2>
          <h3 className='occupation font-semibold w-[200px]h-[30px]  text-yellow-400'>{consultants[consultantname]}</h3>
        </div>
        </div>
        <div className='send-rqs flex justify-center items-center flex-row gap-5 mt-5'>
         <div className='can-r'> <button  className='text-sm w-[130px] h-[30px] bg-blue-400 rounded-2xl hover:bg-blue-500 text-white'>CANCEL REQUEST</button></div>
          <div className='sen-r'><button className='text-sm  w-[130px] h-[30px] bg-blue-400 rounded-2xl  hover:bg-blue-500  text-white' >SEND REQUEST</button></div>
        </div>
       </div>
      </menu>
      <aside className='upc-appointment'>
       <Radiologis/>
      </aside>
      </div>

      <div className='video-container'>
        <h2 className='vidio-appointment'>Video Appointment</h2>
      <div className='image-appointment'>
         
      </div>
      <h2 className='Past-Detail'>Past-Details</h2>
      <div className='text'>
        
      </div>
      </div>

    </div>
  )
}

export default Doctors