import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';

function AddProductForm() {
  const [input, setInput] = useState({
    productName: '',
    size: '',
    unitPrice: '',
    // productImage: {},
  });

  const [file, setFile] = useState(null);

  const { startLoading, stopLoading } = useLoading();

  const formData = new FormData();
  formData.append('imageUrl', file);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      // await login(input);
      toast.success('success login');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  const inputEl = useRef();
  return (
    <div className="flex justify-center mt-8 w-[70vw]">
      <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
        <div className="m-4">
          <label className="inline-block mb-2 text-gray-500">
            Upload ProductImage (jpg,png,svg,jpeg)
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              onClick={() => inputEl.current.click()}
              className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300"
            >
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo
                </p>
              </div>
            </label>
            <input
              type="file"
              name="productImage"
              className="hidden"
              ref={inputEl}
              // multiple
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                  // setInput({ ...input, [e.target.name]: e.target.files[0] });
                }
              }}
            />
          </div>
          <form
            onSubmit={handleSubmitForm}
            className="flex flex-col items-start mt-7 s p-0 gap-[16px] "
          >
            <div className="lg-subtitle-1"> Product Name</div>
            <input
              type="text"
              className="w-full"
              name="productName"
              value={input.productName}
              onChange={handleChangeInput}
            />
            <div className="lg-subtitle-1">Size</div>
            <div className="relative w-full">
              <select
                className="block p-2 mb-6 w-full  h-[40px] border-1 text-sm text-gray-900 bg-gray-50 border "
                name="size"
                onChange={handleChangeInput}
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option defaultValue value="M">
                  M
                </option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <div className="lg-subtitle-1"> Unit Price - THB</div>
              <input
                type="text"
                className="w-full"
                name="unitPrice"
                value={input.unitPrice}
                onChange={handleChangeInput}
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center p-2 space-x-4 ">
          <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">
            Cancel
          </button>
          <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl">
            Create
          </button>
        </div>
      </div>
      <div className=' w-[80vh] flex justify-center'>
        <img
          src={
            file ? (
              URL.createObjectURL(file)
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            )
          }
          alt="productImage"
        />
      </div>
    </div>
  );
}

export default AddProductForm;
