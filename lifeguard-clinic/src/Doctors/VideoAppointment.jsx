
import './VideoAppointment.css'
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { ImPhoneHangUp } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
const VideoAppointment=()=> {
  return (
    <div className='vidio-container mb-6'>
      <h3 className='text-lg text-blue-500 font-semibold'> video Appointment</h3>
    <div className='video-details rounded-2xl mb-10 pt-[65px]'>
      <div className='d-text pl-2'>
      <h3 className='d-name text-lg font-bold text-black'>Dr.Rozy James</h3>
      <p className='specilization text-blue-500 border-blue-500 border-b-2 border-l-2
      border-r-2 h-[35px] w-[115px] text-center pt-1
       bg-white font-semibold rounded-md'>Skin Specialist</p>
      </div>
      <div className='r-icon flex justify-around items-end flex-row mt-[20px] '>
        <div className='voice-icon w-[30px] h-[30px] bg-yellow-400 flex justify-center items-center rounded-full'>
          <MdOutlineKeyboardVoice className='text-white' />
          </div>
        <div className='phone-icon w-[40px] h-[40px] bg-yellow-400 flex justify-center items-center rounded-full'>
          <ImPhoneHangUp className='text-white w-[150px]' />
          </div>
        <div className='burger-icon w-[30px] h-[30px] bg-yellow-400 flex justify-center items-center rounded-full'>
          <GiHamburgerMenu  className='text-white'/>
          </div>
      </div>

    </div>
    </div>
  )
}

export default VideoAppointment