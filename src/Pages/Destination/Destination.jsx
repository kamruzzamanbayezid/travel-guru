import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Button from '../../Components/Shared/Button';

const Destination = () => {

      const [destination, setDestination] = useState({});

      const destinations = useLoaderData();
      const { destinationId } = useParams()

      useEffect(() => {
            const findDestination = destinations?.find(des => des?.id == parseInt(destinationId));
            setDestination(findDestination)
      }, [destinationId, destinations])

      return (
            <div className='flex flex-col lg:flex-row justify-between py-24'>
                  <div className='lg:w-[45%]'>
                        <h1 className="home-title">{destination?.title}</h1>
                        <p className='home-p'>{destination?.description}</p>
                  </div>
                  <div className='lg:w-[45%] bg-white p-6 rounded-md'>
                        <form>
                              <label className='text-[#818181] text-base font-medium' htmlFor="origin">Origin</label>
                              <input readOnly className='block bg-[#F2F2F2] w-full placeholder:text-[#000000] placeholder:font-bold p-5 rounded-md mt-2 mb-4' id='origin' type="text" placeholder={`${destination?.destinationFrom}`} />

                              <label className='text-[#818181] text-base font-medium' htmlFor="destination">Destination</label>
                              <input readOnly className='block bg-[#F2F2F2] w-full placeholder:text-[#000000] placeholder:font-bold p-5 rounded-md mt-2' id='destination' type="text" placeholder={`${destination?.destinationTo}`} />

                              <div className='mt-4 mb-8 flex items-center gap-5'>
                                    <div>
                                          <label className='text-[#818181] text-base font-medium' htmlFor="From">From</label>
                                          <input readOnly className='block bg-[#F2F2F2] w-full placeholder:text-[#000000] placeholder:font-bold p-5 rounded-md' id='From' type="text" placeholder={`${destination?.dateFrom}`} />
                                    </div>

                                    <div>
                                          <label className='text-[#818181] text-base font-medium' htmlFor="To">To</label>
                                          <input readOnly className='block bg-[#F2F2F2] w-full placeholder:text-[#000000] placeholder:font-bold p-5 rounded-md' id='To' type="text" placeholder={`${destination?.dateTo}`} />
                                    </div>
                              </div>

                              <Button text='Start Booking' width='100%'></Button>

                        </form>
                  </div>
            </div>
      );
};


export default Destination;