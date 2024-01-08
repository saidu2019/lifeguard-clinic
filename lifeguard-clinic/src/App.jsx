import './App.css'
import Header from './HeaderComponent/Header'
import Sidebar from './SideComponent/Sidebar'
import Menu from './menuComponent/Menu'



function App() {

  return (
 <div className='main-container'>
      <header className="header"><Header/></header>
      <aside className="sidebar"><Sidebar/></aside>
       <menu className="menubar"><Menu/></menu>
   </div>
  )
}

export default App
