import React from 'react';

function Modal() {
  return (
    <div className="fixed bg-slate-800 top-0 right-0 bottom-0 left-0 opacity-50">
      <div>
        <button className='bg-red-400'>Close</button>
      </div>
    </div>
  );
}

export default Modal;
