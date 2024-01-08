import'./Sidebar.css'
import { MdHealthAndSafety } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { GiTestTubes } from "react-icons/gi";
import { AiOutlineMessage } from "react-icons/ai";
import { VscOpenPreview } from "react-icons/vsc";
import { FaHospitalSymbol } from "react-icons/fa";
import { Link} from 'react-router-dom'
const Sidebar=()=>{
    return(
        <div className='side-container'>
        <aside className='main-sidebar-container '>
       
        <logo className='logo'>
        <h2 className='logo-name flex justify-center flex-row'>
            LIFE GUARD <span className='text-blue-500'> CLINIC</span><MdHealthAndSafety className='w-8 h-8'/>
        </h2>
        </logo>
       <div className='emg'> </div>
        <ul className='links py-5 '>
            <li className='links-name py-2 hover:text-blue-500 '>
                <a href='' className='h-link'><MdDashboard /><Link to='/' className='ml-5'>Dashboard</Link></a>
           </li>
            <li className='links-name py-2  hover:text-blue-500'>
                <a href='' className='h-link'><FaUserDoctor /><Link to='doctors' className='ml-5'>Doctors</Link></a>
            </li>
            <li className='links-name py-2  hover:text-blue-500'>
                <a href='' className='h-link'><MdGroups /><Link to='patients' className='ml-5'>Patients</Link></a>
            </li>
            <li className='links-name py-2  hover:text-blue-500'>
                <a href='' className='h-link'><GiTestTubes /><Link to='test-result' className='ml-5'>Test Result</Link></a>
            </li>
            <li className='links-name py-2  hover:text-blue-500'>
                <a href='' className='h-link'><AiOutlineMessage /><Link to ='message' className='ml-5'>Message</Link></a>
            </li>
            <li className='links-name py-2  hover:text-blue-500'>
                <a href='' className='h-link'><VscOpenPreview /><Link to='review' className='ml-5'>Review </Link></a>
            </li>
            <li className='links-name py-2  hover:text-blue-500'>
                <a href='' className='h-link'><FaHospitalSymbol /><Link to='H-medication' className='ml-5'>Home Medication </Link></a>
            </li>
        </ul>
        </aside>
        </div>

    )
    }
export default Sidebar