import logo from "../assets/logo.svg"
import {BiSearch, BiUserCircle} from "react-icons/bi"
import {MdMenu} from "react-icons/md"
import { Link } from "react-router-dom"

const Header = () =>{
    return (<header className='flex px-12 justify-between items-center'>
    <a href="/">
      <img src={logo} alt="haven logo" className='h-9'/>
    </a>
    <div className='flex justify-between items-center gap-3 border border-gray-300 shadow-md hover:shadow-lg transition-all ease-in-out duration-300 rounded-full py-1 px-4'>
      <div className='font-semibold'>Anywhere</div>
      <div className='border h-5 border-gray-300'></div>
      <div className='font-semibold'>Any week</div>
      <div className='border h-5 border-gray-300'></div>
      <div>Add guests</div>
      <button className='rounded-full bg-primary p-1'>
        <BiSearch size={22} className='fill-white'/>
      </button>
    </div>
    <Link to={"/login"} className='flex items-center gap-2 border border-gray-300 hover:shadow-md transition-all ease-in-out duration-300 rounded-full py-1 px-2 cursor-pointer'>
      <MdMenu size={26} className='fill-primary'/>
      <BiUserCircle size={35} className='fill-yellow-950'/>
    </Link>
  </header>)
}

export default Header