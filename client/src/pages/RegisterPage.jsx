import LoginPic from "../assets/loginPic.png"
import { Link } from "react-router-dom";

const RegisterPage = () => {

    const loginHeight = `calc(100vh - 56px)`;

  return (
    <div className="flex px-5 md:px-12 py-4" style={{ height: loginHeight }}>
      <div className="hidden md:flex h-full relative w-[60%]">
        <img src={LoginPic} className="h-full w-full"/>
        <div className="absolute bottom-7 flex flex-col gap-3 text-secondary text-center justify-center items-center px-5 lg:px-16">
          <div className="font-semibold text-xl lg:text-2xl px-5 lg:px-20">Discover Your Dream Rental. Unleash the Joy of Perfect Living.</div>
          <div className="text-sm lg:text-base">Transforming Renting Experiences. Empowering You to Find Your Ideal Home and Embrace a Life of Possibilities.</div>
          <div className="flex flex-row gap-2">
            <div className="borderedTags">100% Guarantee</div>
            <div className="borderedTags">Vast Rental Selection</div>
            <div className="borderedTags">Seamless Transactions</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 md:py-12 items-center">
        <div className="flex flex-col text-center items-center justify-center">
          <h1 className="font-bold text-primary text-lg lg:text-xl pb-1">Create your account</h1>
          <h2 className="text-gray-600">Get started to find your Perfect Rental Haven</h2>
          <div className="h-[1px] w-24 bg-gray-200 mt-2 mb-10"></div>
        </div>
        <form className="flex flex-col gap-5 w-full px-5 lg:px-24">
        <div>
              <label className="flex font-medium text-gray-600 mb-1" for="name">Name<div className="text-red-500">*</div></label>
              <input id="name" type="text" placeholder="Enter your name"/>
            </div>
            <div>
              <label className="flex font-medium text-gray-600 mb-1" for="email">Email<div className="text-red-500">*</div></label>
              <input id="email" type="email" placeholder="Enter your email"/>
            </div>
            <div>
              <label className="flex font-medium text-gray-600 mb-1" for="pwd">Password<div className="text-red-500">*</div></label>
              <input id="pwd" type="password" placeholder="Enter your password"/>
            </div>
            <div className="w-full">
              <button className="w-full primary">
                Sign Up
              </button>
              <div className="mt-2 text-xs lg:text-sm text-black">Already have an account? <Link to={"/login"} className="text-amber-700 font-medium">Log in</Link> </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
