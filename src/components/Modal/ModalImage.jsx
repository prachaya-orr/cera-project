import { useAuth } from '../../contexts/AuthContext';

function ModalImage({ imageUrl, productName }) {
  const { closeModal, openModal } = useAuth();

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-transparent backdrop-blur-[0.5px] flex flex-col justify-center items-center  ">
      <div>
        <div className="bg-white h-[50vh] w-[50vh] flex flex-col items-center justify-center gap-12 rounded-lg ">
          <div className="flex justify-between">
            <button
              className=" mx-10 text-xl underline decoration-[red]"
              onClick={() => {
                openModal();
                closeModal();
              }}
            >
              <p className="lg-subtitle-1">{productName}</p>
            </button>
          </div>
          <div className="flex justify-center ">
            {/* <img src={} alt="ProductImage" className="w-1/6 rounded" /> */}
          </div>
          <div className="flex flex-row justify-center">
            <button
              onClick={closeModal}
              className=" text-white bg-red-700 h-[3rem] w-24 rounded-[15px] hover:bg-black"
            >
              <p className="text-xl">Close</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalImage;
