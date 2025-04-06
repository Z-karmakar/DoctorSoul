import { Outlet } from "react-router-dom"
import Logo from "./Logo"
import deliveryboy from "./assets/deliveryboy.png"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-500 to-blue-300 p-8 flex flex-col">
        <Outlet />
      </div>
      <div className="w-full md:w-1/2 bg-sky-100 p-8 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center mt-8">
          <Logo />
          <img src={deliveryboy} alt="Delivery Boy Illustration" className="w-100 max-w-md mt-8" />
          <video src=""></video>
        </div>
      </div>
    </div>
  )
}

export default Layout

