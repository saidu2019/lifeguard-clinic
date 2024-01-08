
import Dashboard from '../Dashboard/Dashboard'
import Doctors from '../Doctors/Doctors'
import HomeMedication from '../HomeMedication/HomeMedication'
import Message from '../Message/Message'
import PageNull from '../PageNotFound/PageNull'
import Patient from '../Patients/Patient'
import Review from '../Review/Review'
import TestResult from '../TestResult/TestResult'
import './Menu.css'
import{Routes,Route} from 'react-router-dom'

const Menu=()=>{
  return (
    <div className='main-menu-container'>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='patients' element={<Patient/>}/>
      <Route path='doctors' element={<Doctors/>}/>
      <Route path='test-result' element={<TestResult/>}/>
      <Route path='message' element={<Message/>}/>
      <Route path='review' element={<Review/>}/>
      <Route path='H-medication' element={<HomeMedication/>}/>
      <Route path='*' element={<PageNull/>}/>
    </Routes>
      
    </div>
  )
}

export default Menu