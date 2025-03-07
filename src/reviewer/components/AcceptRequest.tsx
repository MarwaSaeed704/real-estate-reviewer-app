import '../styles/style.css'
import acceptImg from '../../assets/reviewer/assest4.png'
import { useState } from 'react'
import ConfirmAccept from './ConfirmAccept';

interface AcceptRequestProps{
   onClose:()=>void,
  //  onConfirm:()=>void,
}

const AcceptRequest: React.FC<AcceptRequestProps> = ({ onClose }) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  
  return (
    <>
      {confirm ? 
        <ConfirmAccept/>
        
        :
        <>
          {/* overlay */}
      <div className="overlay">

        {/* accept-content */}
        <div className="position-element w-2/6 h-fit rounded-lg bg-white text-center p-8">
          <div className='w-3/6 m-auto '> <img src={acceptImg} className='w-full'/> </div>
          <p className='main-font text-[22px] font-medium mt-4 mb-6'>سوف يتم قبول الطلب بالفعل </p>

          <div className='flex'>
            <button
              onClick={()=>setConfirm(true)}
              className='bg-color main-font text-white rounded-md w-3/6 p-2 font-bold text-[22px] ml-4'
            >
             تاكيد 
            </button>
            <button
              onClick={onClose}
              className='main-color main-font border-maincolor bg-white rounded-md w-3/6 p-2 font-bold text-[22px] mr-4'
            >
              الغاء
            </button>
          </div>

        </div>
        {/*== accept-content ==*/}

      </div>
      {/*== overlay ==*/}
        
        </>

        
      }
    </>
  )
 }

export default AcceptRequest

