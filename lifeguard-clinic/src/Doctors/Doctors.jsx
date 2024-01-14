import AppointmentRequest from './AppointmentRequest'
import DocsAppointment from './DocsAppointment'
import './Doctors.css'
import PastDetails from './PastDetails'
import VideoAppointment from './VideoAppointment'


const Doctors=()=>{
  
  return (
  <div className='doctorcontainer'>

    <div className='appointment-r'><AppointmentRequest/></div>
    <div className='videoappointment'><VideoAppointment/></div>
    <div className='doc-app'><DocsAppointment/></div>
    <div className='past-detail'><PastDetails/></div>

  </div>
  )
}

export default Doctors