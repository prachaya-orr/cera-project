import React from 'react';
import SideBar from '../../components/adminUI/SideBar';
import AddProductForm from '../../features/product/AddProductForm';

function AddProductPage() {
  return (
    <div>
      <SideBar />
      <div className="absolute top-0 left-[20vw] w-[80vw] h-[100vh] bg-slate-500 flex flex-col items-center justify-evenly ">
        <AddProductForm />
      </div>
    </div>
  );
}

export default AddProductPage;
