import './Header.css'
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header=()=>{
    return(
       <div className='main-header-container '>
       <div className='header-container pt-5'>
        
       <div className='search-container '>
            <FiSearch className='mt-[10px] ml-[5px]' />
            <input type='search' placeholder='Search' className='search w-[300px] h-[25px] pl-[8px] mt-[5px]'></input>
        </div>
         
         <div className='notifications '>
            <div className='noti-box w-[30px]  h-[30px] rounded-lg bg-white flex justify-center items-center outline-none ml-[2px]'>
          <IoMdNotificationsOutline className=' noti h-[15px] w-[15px] ml-[1px] '/>
          </div>
          <div className='box-n w-[10px] h-[10px] bg-yellow-400 rounded-2xl mb-5  '></div>
         </div>
         <div className='profile'>
              
         </div>

        
       </div>    
       </div>
    )
}

export default Header