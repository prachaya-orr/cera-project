import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';

function ModalPromotion() {
  const [input, setInput] = useState({
    codePromotion: '',
    shippingCode: '',
  });
  const { closeModal, openModal, login } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      // ใส่ไว้ login ไว้ก่อนเฉย
      await login(input);
      toast.success('used success');
    } catch (err) {
      toast.error('your code is invalid');
    }
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-10">
      <form onSubmit={handleSubmitForm}>
        <div className="bg-white h-[500px] w-[400px] flex flex-col items-center justify-center gap-12 rounded-[50px]">
          <div className="flex justify-between">
            <button
              className=" mx-10 text-xl underline decoration-[red]"
              onClick={() => {
                openModal();
                closeModal();
              }}
            >
              <p className="lg-subtitle-1">USE CODE</p>
            </button>
          </div>
          <div>
            <div className="lg-subtitle-1">Code Promotion</div>
            <input
              type="text"
              className="w-72 h-[2.5rem] rounded-[15px] px-2 bg-gray-200"
              name="codePromotion"
              value={input.codePromotion}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <div className="lg-subtitle-1">Free Shipping Code</div>
            <input
              type="text"
              className="w-72  h-[2.5rem] rounded-[15px] px-2 bg-gray-200"
              name="shippingCode"
              value={input.shippingCode}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-row justify-center gap-9 ">
            <button
              onClick={closeModal}
              className="text-white bg-red-700 h-[3rem] w-24 rounded-[15px] hover:bg-black"
            >
              <p className="text-xl">Cancel</p>
            </button>
            <button className="text-white bg-red-700 h-[3rem] w-40 rounded-[15px] hover:bg-black">
              <p className="text-xl">USE THIS CODE</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalPromotion;
