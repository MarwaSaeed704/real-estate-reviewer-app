import '../styles/style.css'
import logout from '../../assets/reviewer/logout.png'
// import { useState } from 'react'
// import ConfirmAccept from './ConfirmAccept';

// interface LogoutProps{
// //    onClose:()=>void,
//   //  onConfirm:()=>void,
// }

const Logout: React.FC = () => {
  // const [confirm, setConfirm] = useState<boolean>(false);
  
  return (
    <>
      {/* {confirm ? 
        <ConfirmAccept/>
        
        : */}
        <>
          {/* overlay */}
      <div className="overlay">

        {/* accept-content */}
        <div className="position-element w-2/6 h-fit rounded-lg bg-white text-center p-8">
        <div className='w-2/6 m-auto '> <img src={logout} className='w-full' /> </div>
          <p className='main-font text-[#C29062] text-[28px] font-bold mt-8 '>عود قريباً</p>              
          <p className='main-font text-[22px] font-medium mt-4 mb-6'>هل انت متأكد من تسجيل الخروج ؟</p>

          <div className='flex'>
            <button
              // onClick={()=>setConfirm(true)}
              className='cursor-pointer bg-color main-font text-white rounded-md w-3/6 p-2 font-bold text-[22px] ml-4'
            >
             نعم 
            </button>
            <button
              
              className='cursor-pointer bg-color main-font text-white rounded-md w-3/6 p-2 font-bold text-[22px] mr-4'
            >
              الغاء
            </button>
          </div>

        </div>
        {/*== accept-content ==*/}

      </div>
      {/*== overlay ==*/}
        
        </>

        
      {/* } */}
    </>
  )
 }

export default Logout

