import Marquee from 'react-fast-marquee';
import './Home.css';
import { BsArrowRight } from "react-icons/bs";
import sajek from '../../assets/Sajek.png';
import sreemongol from '../../assets/Sreemongol.png';
import sundorbon from '../../assets/sundorbon.png';
import { Link } from 'react-router-dom';

const Home = () => {
      return (
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between py-24">
                  <div className="lg:w-2/5 p-4 lg:p-0">
                        <h1 className="home-title">Cox's bazar</h1>
                        <p className='home-p '>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className='btn-style flex items-center gap-1 px-5'>Booking <BsArrowRight /></button>
                  </div>
                  <div className="lg:w-[57%]">
                        <Marquee pauseOnHover={true}>
                              <Link to='/destination/1'>
                                    <div className='relative mr-10 w-[270px] h-[cal(400px - 4px)] rounded-2xl hover:border-4 hover:border-[#FBBC04]'>
                                          <div className='absolute inset-0 rounded-2xl' style={{
                                                backgroundImage: `url(${sajek})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                zIndex: -1
                                          }}></div>
                                          <div className='absolute inset-0 z-0 rounded-2xl'></div>
                                          <div className='sajek relative z-10 home-slider-place flex  justify-start pl-6 pb-4 h-[400px] items-end rounded-2xl'>Sajek</div>
                                    </div>
                              </Link>

                              <Link to='/destination/2'>
                                    <div className='relative mr-10 w-[270px] h-[cal(400px - 4px)] rounded-2xl hover:border-4 hover:border-[#FBBC04]'>
                                          <div className='absolute inset-0 rounded-2xl' style={{
                                                backgroundImage: `url(${sreemongol})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                zIndex: -1
                                          }}></div>
                                          <div className='absolute inset-0 z-0 rounded-2xl'></div>
                                          <div className='sajek relative z-10 home-slider-place flex  justify-start pl-6 pb-4 h-[400px] items-end rounded-2xl'>Sreemongol</div>
                                    </div>
                              </Link>

                              <Link to='/destination/3'>
                                    <div className='relative mr-10 w-[270px] h-[cal(400px - 4px)] rounded-2xl hover:border-4 hover:border-[#FBBC04]'>
                                          <div className='absolute inset-0 rounded-2xl' style={{
                                                backgroundImage: `url(${sundorbon})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                                zIndex: -1
                                          }}></div>
                                          <div className='absolute inset-0 z-0 rounded-2xl'></div>
                                          <div className='sajek relative z-10 home-slider-place flex  justify-start pl-6 pb-4 h-[400px] items-end rounded-2xl'>Sundorbon</div>
                                    </div>
                              </Link>
                        </Marquee>
                  </div >
            </div >
      );
};

export default Home;