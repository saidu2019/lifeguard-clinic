import './DocsAppointment.css'
import React,{useState,useEffect}from 'react'
function DocsAppointment() {
  {/* the state management for images */}
  const[rad, setRadio]=useState(0)
  const[car, setCario]=useState(0)
  const[psy, setPsycho]=useState(0)
  const[neu, setNeuro]=useState(0)
{/* the state management for name */}

const[radname, setRadioName]=useState(0)
const [carnames, setCarNames]=useState(0)
const[psyname, setPsychoName]=useState(0)
const [neuroname, setNeuroName]=useState(0)


{/*collection of picin for of array */}
  const radImage=['https://media.istockphoto.com/id/844272134/photo/technician-standing-in-front-of-mri-scanner.jpg?s=612x612&w=0&k=20&c=zsx822PxDe6uCHNaaVCRRs5YgZCFxngLAZu_cP65hfQ=',
                  'https://img.freepik.com/premium-photo/positive-afro-american-doctor-analysing-x-ray-scan-against-white-wall_376548-625.jpg',
                  'https://www.getdoc.com/wp-content/uploads/2016/07/radiologist-e1469440098651.jpg'
                ]

  const carImage=['https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg',
                'https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZG9jdG9yfGVufDB8fDB8fHww',
                'https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg'
               ] 

   const psyImage=['https://thumbs.dreamstime.com/b/portrait-positive-black-doctor-holding-medical-chart-male-over-white-background-178499631.jpg',
                 'https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSdvi2ds3yejmk8mhvxYr1OpdVTrSM.jpg',
                 'https://www.ama-assn.org/sites/ama-assn.org/files/2019-03/MMM-Deena_Kishawi-Index_1170x780.jpg'
              ] 
    
   const neuroImage=['https://img.freepik.com/free-photo/portrait-successful-young-doctor-with-folder-stethoscope_1262-12410.jpg?w=900&t=st=1705385213~exp=1705385813~hmac=034521d0719a5d9952c7ce4f380cd9da65b70724006f5a652b259f8a256eeb98',
                 'https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yJTIwZmVtYWxlfGVufDB8fDB8fHwx&w=1000&q=80',
                 'https://img.freepik.com/premium-photo/portrait-beautiful-young-female-doctor-white-medical-jacket-isolated-white-background-brunette-woman-medic-crossed-hands-smiling-camera_533057-127.jpg'
              ]      
{/*collection of name in for of array */}
const radNames=['Santina Mario ',
               'Abdulkadir Malik' ,
               'David micheal']

const carNames=['Mary deo',
                'joy malia',
                'john senta'] 
                
const psyNames=['Aliyu Musa',
                  'Angelina Matiz',
                  'Madina Yusuf']

const neuroNames=['Isha Khabir',
                  'Ganghas Pampalka',
                   'Faith Lucas']

{/*specilization */}
const radSpecialist= 'Radiologist'
const Cadspecialist= 'Cardiologist'
 const Psychospecialist='Psychologist'
 const Neurospecialist ='Neurosurgeon'

{/* useEffect for radiologist*/}
  useEffect(()=>{
  const radChangeImage =setInterval(()=>{
    setRadio((preIndex)=>(preIndex + 1) %  radImage.length)
  },3000) 
  return()=>clearInterval(radChangeImage)
  },[ rad,radImage.length,])

useEffect(()=>{
  const radChangeName = setInterval(()=>{
    setRadioName((preIndex)=>(preIndex + 1) % radNames.length )
  },3000)
  return()=>clearInterval(radChangeName)
},[radname, radNames.length])

{/*useEffect for cadiologist */}
useEffect(()=>{
   const cardioChangeImag= setInterval(()=>{
    setCario((preIndex)=>(preIndex +1) % carImage.length)
   },3000)
return ()=>clearInterval(cardioChangeImag)
},[car, carImage.length])

useEffect(()=>{
const cardioChangeName = setInterval(()=>{
  setCarNames((preIndex)=>(preIndex + 1) % carNames.length)
},3000)
return()=>clearInterval(cardioChangeName)
},[carnames, carNames.length])

{/* useEffect for psychologist */}
useEffect(()=>{
 const psychoChangeImage = setInterval(()=>{
  setPsycho((preIndex)=>(preIndex + 1) % psyImage.length)
 },3000)
 return ()=> clearInterval(psychoChangeImage)
},[psy, psyImage.length])

useEffect(()=>{
  const psychoChangeName = setInterval(()=>{
  setPsychoName((preIndex)=>(preIndex + 1) % psyNames.length)
  },3000)
  return()=>clearInterval(psychoChangeName)
},[psyname, psyNames.length])

{/*useEffect for Neurologist*/}

useEffect(()=>{
  const neuroChangeImage = setInterval(()=>{
    setNeuro((preIndex)=>(preIndex + 1) % neuroImage.length )
  },3000)
  return()=>clearInterval(neuroChangeImage)
},[neu,neuroImage.length])

useEffect(()=>{
   const neuroChangeName = setInterval(()=>{
    setNeuroName((preIndex)=>(preIndex + 1) % neuroNames.length )
   },3000)
   return ()=>clearInterval(neuroChangeName)
},[neuroname,neuroNames.length])

  return (
    <div>
      <h2 className='up-appointment font-serif font-semibold text-blue-500 text-sm  '>Upcoming Appointments</h2>
    <div className="doc-container mt-3">
            <div className="Radiology w-[330px] h-[85px] 
            rounded-3xl bg-white flex justify-start items-center flex-row">
                <div className="pic-specialist px-5 ">
                  <img src={radImage[rad]} alt={`radImage ${rad + 1}`} className='w-[50px] h-[50px] rounded-full'/>
                </div>
                <div className="container-text-specilist">
                <h3 className="Name text-sm font-bold"> Dr. {radNames[radname]}</h3>
                <p className="specialist text-sm font-semibold text-yellow-400">{radSpecialist}</p>
                </div>
            </div>
            <div className="cadiology w-[330px] h-[85px]
             rounded-3xl bg-white flex justify-start items-center flex-row">
            <div className="pic-specialist px-5">
            <img src={carImage[car]} alt={`caImage ${car + 1}`} className='w-[50px] h-[50px] rounded-full'/>
            </div>
                <div className="container-text-specilist">
                <h3 className="Name text-sm font-bold">Dr. {carNames[carnames]}</h3>
                <p className="specialist text-sm font-semibold text-yellow-400">{ Cadspecialist}</p>
                </div>
            </div>
            <div className="Psychology w-[330px] h-[85px]
             rounded-3xl bg-white flex justify-start items-center flex-row">
            <div className="pic-specialist px-5">
            <img src={psyImage[psy]} alt={`psyImage ${psy + 1}`} className='w-[50px] h-[50px] rounded-full'/>
            </div>
                <div className="container-text-specilist">
                <h3 className="Name text-sm font-bold">Dr. {psyNames[psyname]}</h3>
                <p className="specialist text-sm font-semibold text-yellow-400">{Psychospecialist}</p>
                </div>
            </div>
            <div className="Neurosurgery w-[330px] h-[85px]
             rounded-3xl bg-white flex justify-start items-center flex-row">
            <div className="pic-specialist px-5">
            <img src={neuroImage[neu]} alt={`neuro ${neu + 1}`} className='w-[50px] h-[50px] rounded-full'/>
            </div>
                <div className="container-text-specilist">
                <h3 className="Name text-sm font-bold">Dr. {neuroNames[neuroname]}</h3>
                <p className="specialist specialist text-sm font-semibold text-yellow-400">{Neurospecialist}</p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default DocsAppointment