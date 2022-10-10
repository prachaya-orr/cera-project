// import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import { useProduct } from '../../contexts/ProductContext';

function EditProductModal({
  productId,
  imageUrl,
  productName,
  size,
  color,
  unitPrice,
  countStock,
  onCloseModal,
}) {
  // useEffect(() => {
  console.log(productId);

  //   const idEdit = async () => {
  //     try {
  //       const res = await adminApi.getOne(productId);
  //       console.log(res.data)
  //       const { thisProduct } = res.data;

  //       setInput({
  //         productName: thisProduct.productName,
  //         size: thisProduct.ProductLists[0].sizeValue,
  //         color: thisProduct.ProductLists[0].colorValue,
  //         unitPrice: thisProduct.unitPrice,
  //         imageUrl: thisProduct.ProductImages[0].imageUrl,
  //         countStock: thisProduct.ProductLists[0].countStock,
  //       });
  //       setFile(input.imageUrl);
  //     } catch (err) {
  //       toast.error(err.response?.data.message);
  //     }
  //   };

  //   idEdit();
  // }, [productId]);

  const { fetchAllProducts, updateProduct, deleteProduct } = useProduct();
  const [input, setInput] = useState({
    productName: productName,
    size: size,
    unitPrice: unitPrice,
    color: color,
    countStock: countStock,
    imageUrl: imageUrl,
    oldImageUrl: imageUrl,
  });

  // useEffect(() => {
  //   console.log(input.imageUrl);
  // }, [input]);

  const [file, setFile] = useState(null);

  const { startLoading, stopLoading } = useLoading();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClickUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!input.imageUrl) {
        return toast.error('Product Image is required.');
      }

      if (!input.productName) {
        return toast.error('Product Name is required.');
      }

      if (!input.size) {
        return toast.error('Size is required.');
      }

      if (!input.color) {
        return toast.error('Color is required.');
      }

      if (!input.unitPrice) {
        return toast.error('Unit Price is required.');
      }

      if (!input.countStock) {
        return toast.error('Quantity is required.');
      }

      startLoading();
      const formData = new FormData();
      formData.append('imageUrl', input.imageUrl);
      formData.append('productName', input.productName);
      formData.append('size', input.size);
      formData.append('unitPrice', input.unitPrice);
      formData.append('color', input.color);
      formData.append('countStock', input.countStock);
      await updateProduct(productId, formData);
      setFile(null);
      fetchAllProducts();
      // inputEl.current.value = null;
      onCloseModal();
      toast.success('success update Product');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
      setFile(null);
      setInput({
        productName: '',
        size: '',
        unitPrice: '',
        color: '',
        countStock: '',
        imageUrl: '',
      });
    }
  };

  const handleClickDelete = async (e) => {
    try {
      startLoading();
      // console.log(productId);
      await deleteProduct(productId);
      toast.success('success delete');
      onCloseModal();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
      setFile(null);
      setInput({
        productName: '',
        size: '',
        unitPrice: '',
        color: '',
        countStock: '',
        imageUrl: '',
      });
    }
  };

  const inputEl = useRef();
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-transparent backdrop-blur-[2px] flex flex-col justify-center items-center  "
      onClick={onCloseModal}
    >
      <div className="flex justify-center w-[70vw]">
        <div
          className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
              Upload Product Image (jpg,png,svg,jpeg)
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
                name="imageUrl"
                className="hidden"
                ref={inputEl}
                // multiple
                onChange={(e) => {
                  if (e.target.files[0]) {
                    // console.log(e.target.files[0]);
                    setFile(e.target.files[0]);
                    setInput({ ...input, [e.target.name]: e.target.files[0] });
                  }
                }}
              />
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col items-start  p-0  gap-2 "
            >
              <div className="relative w-full">
                <div className="flex justify-start lg-subtitle-1">
                  Product Name
                </div>
                <input
                  type="text"
                  className="w-full rounded-md"
                  name="productName"
                  value={input.productName}
                  onChange={handleChangeInput}
                />
                <div className="flex justify-start lg-subtitle-1">Size</div>
                <select
                  className="block p-2 mb-3 w-full  h-[40px] border-1 text-sm text-gray-900 bg-gray-50 border rounded-md "
                  name="size"
                  value={input.size}
                  onChange={handleChangeInput}
                >
                  <option value="" disabled>
                    Select Size
                  </option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <div className="flex justify-start lg-subtitle-1">Color</div>
                <select
                  name="color"
                  value={input.color}
                  onChange={handleChangeInput}
                  className="block p-2 mb-3  w-full  h-[40px] border-1 text-sm text-gray-900 bg-gray-50 border rounded-md"
                >
                  <option value="" disabled>
                    Select Color
                  </option>
                  <option value="BLUE">BLUE</option>
                  <option value="GREEN">GREEN</option>
                  <option value="NAVY">NAVY</option>
                  <option value="PINK">PINK</option>
                  <option value="RED">RED</option>
                </select>
                <div className="flex justify-start lg-subtitle-1">
                  Unit Price - THB
                </div>
                <input
                  type="text"
                  className="w-full rounded-md mb-3"
                  name="unitPrice"
                  value={input.unitPrice}
                  onChange={handleChangeInput}
                />
                <div className="flex justify-start lg-subtitle-1">Quantity</div>
                <input
                  type="text"
                  className="w-full rounded-md"
                  name="countStock"
                  value={input.countStock}
                  onChange={handleChangeInput}
                />
              </div>
            </form>
          </div>
          <div className="flex justify-center p-2 space-x-4 ">
            <button
              className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded shadow-xl"
              onClick={() => {
                setFile(null);
                inputEl.current.value = null;
                onCloseModal();
              }}
            >
              Cancel
            </button>
            <button
              className="font-[500] px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded shadow-xl"
              onClick={handleClickUpdate}
            >
              Edit This Product
            </button>
          </div>
          <button
            className="fixed bottom-3 right-1/2 translate-x-5 w-1/9 px-4 py-2 text-white bg-red-600 hover:bg-black rounded shadow-xl font-bold"
            onClick={handleClickDelete}
          >
            Delete This Product
          </button>
        </div>
        <div
          className={`w-[80vh] flex justify-center rounded-md shadow-xl`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={file ? URL.createObjectURL(file) : imageUrl}
            alt="productImage"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default EditProductModal;
