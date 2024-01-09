import './Doctors.css'
import Radiologis from './Radiologis '

const Doctors=()=>{
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
        <img src='../images/cardiologist.jpg' className=' w-[60px] h-[60px] rounded-full' alt='image'/>
        <div className='name-occupation flex justify-start flex-col gap-1 pl-2'>
          <h2 className='name font-bold'>Dr.Mary jeo </h2>
          <h3 className='occupation font-semibold'>Cadiologist</h3>
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