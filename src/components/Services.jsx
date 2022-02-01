import React from 'react';
import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {RiHeart2Fill} from 'react-icons/ri'

const ServiceCARD = ( {color, title, icon, subtitle} ) => (

  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}  >
          {icon}
      </div>
      <div className = 'ml-5 flex flex-col flex-1'>
        <h1 className='text-white text-2xl mt-2 '> {title} </h1>
        <p className='text-white mt-2 md:w-9/12'> {subtitle} </p>
      </div>
  </div>
)


const Services = () => {
  return (
    <div className='flex w-full flex-col md:flex-row justify-center items-center gradient-bg-services'>
        <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
            <div className='flex-1 flex flex-col justify-start items-start'>
              <h1 className='text-white text-5xl py-2 text-gradient '> 
                   Services that we
                   <br/>
                   Continue to improve
              </h1>
            </div>
        </div>
        <div className='flex-1 flex justify-start flex-col items-center items-center'>
          <ServiceCARD
            color='bg-[#2952E3]'
            title='Security Guaranteed'
            icon={<BsShieldFillCheck font-size={21} className='text-white' />}
            subtitle='security is guaranteed, we always maintain privacy and maintain the quality of our product'
          />
          <ServiceCARD
            color='bg-[#8945F8]'
            title='Best Exchange rates'
            icon={<BiSearchAlt font-size={21} className='text-white' />}
            subtitle='security is guaranteed, we always maintain privacy and maintain the quality of our product'
          />
          <ServiceCARD
            color='bg-[#F84550]'
            title='Fastest Transactions'
            icon={<RiHeart2Fill font-size={21} className='text-white' />}
            subtitle='security is guaranteed, we always maintain privacy and maintain the quality of our product'
          />
        </div>
    </div>
  );
};

export default Services;
