import Appointment from './Appointment';
import Dailyaappointment from './Dailyaappointment';
import './Dashboard.css';
import Hepitatis from './Hepitatis';
import LocationPain from './LocationPain';
const Dashboard=()=>{
  return (
    <div className='dashboard-main-container'>
    <div className='dashbord-contain'>
      
       <div className='location-pain p-2'><LocationPain/></div>
       <div className='appointments  p-2'><Appointment/></div>
       <div className='hepitatis  p-2'><Hepitatis/></div>
       <div className='daily-appont  p-2'><Dailyaappointment/></div>
    
    </div>
    </div>
  )
}

export default Dashboard