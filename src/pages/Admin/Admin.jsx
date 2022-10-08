import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import SideBar from '../../components/adminUI/SideBar';
function Admin() {
  const { user } = useAuth();
  console.log(user.firstName);
  return (
    <div>
      <SideBar />
      <div className="absolute top-0 left-[20vw] w-[80vw] h-[100vh] bg-slate-500 flex flex-col gap-5 items-center justify-evenly "></div>
    </div>
  );
}

export default Admin;
