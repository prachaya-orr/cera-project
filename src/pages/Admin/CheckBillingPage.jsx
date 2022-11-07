import React from 'react';
import SideBar from '../../components/adminUI/SideBar';
import CheckBillingContainer from '../../features/order/CheckBillingContainer';

function CheckBillingPage() {
  return (
    <div>
      <SideBar />
      <div className='absolute top-0 left-[20vw] w-[80vw] h-[100vh] bg-slate-500 flex flex-col items-center justify-evenly '>
        <CheckBillingContainer />
      </div>
    </div>
  );
}

export default CheckBillingPage;
