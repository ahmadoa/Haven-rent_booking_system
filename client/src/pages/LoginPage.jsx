import LoginPic from "../assets/loginPic.png"
import { Link, useOutletContext } from "react-router-dom";

const LoginPage = () => {

  const loginHeight = `calc(100vh - 56px)`;

  return (
    <div className="flex px-12 py-4" style={{ height: loginHeight }}>
      <div className="h-full relative">
        <img src={LoginPic} className="h-full"/>
        <div className="absolute bottom-7 flex flex-col gap-3 text-secondary text-center justify-center items-center px-16">
          <div className="font-semibold text-2xl px-20">Discover Your Dream Rental. Unleash the Joy of Perfect Living.</div>
          <div className="">Transforming Renting Experiences. Empowering You to Find Your Ideal Home and Embrace a Life of Possibilities.</div>
          <div className="flex flex-row gap-2">
            <div className="borderedTags">100% Guarantee</div>
            <div className="borderedTags">Vast Rental Selection</div>
            <div className="borderedTags">Seamless Transactions</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-around py-20 items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-primary text-xl pb-1">Login to your account</h1>
          <h2 className="text-gray-600">Discover Your Perfect Rental Haven</h2>
          <div className="h-[1px] w-24 bg-gray-200 mt-2"></div>
        </div>
        <form className="flex flex-col gap-5 w-full px-24">
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
                Login
              </button>
              <div className="mt-2 text-sm text-black">Don't have an account? <Link to={""} className="text-amber-700 font-medium">Register</Link> </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage