import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import bgImg from '../assets/Rectangle 1.png'

const MainLayout = () => {
      return (
            <div className="relative min-h-screen">
                  <div className="absolute inset-0" style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: -1,
                  }}></div>
                  <div className="absolute inset-0 bg-[#000000b3]"></div>
                  <div className="relative z-10 max-w-[1170px] mx-auto">
                        <Navbar />
                        <Outlet />
                  </div>
            </div>
      );
};

export default MainLayout;