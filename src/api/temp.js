import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../contexts/LoadingContext";
import { toast } from "react-toastify";
import * as adminService from "../api/adminApi";
import { useAdmin } from "../contexts/AdminContext";

function Mymodal({ open, close, id, prod }) {
  // const [oneEdit, setOneEdit] = useState();
  // console.log("prod :>> ", prod);
  useEffect(() => {
    const idEdit = async () => {
      try {
        const res = await adminService.getOneIdEdit(id);
        // console.log(res.data.Itemedit);
        // setOneEdit(res.data.Itemedit);
        const { Itemedit } = res.data;

        // setInput({
        //   nameProduct: Itemedit.nameProduct,
        //   descriptionCourse: Itemedit.descriptionCourse,
        //   priceProduct: Itemedit.priceProduct,
        //   descriptionLast: Itemedit.descriptionLast,
        //   type: Itemedit.type,
        //   inventory: Itemedit.inventory,
        //   subject: Itemedit.subjectcourse.subject,
        //   image: Itemedit.courseImg,
        // });
      } catch (err) {
        toast.error(err.response?.data.message);
      }
    };

    idEdit();
  }, [id]);

  const [file, setFile] = useState(prod.courseImg);
  const [file2, setFile2] = useState(null);
  const inputEl = useRef();
  const inputEl2 = useRef();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const { setAllProduct, allcategory, getProduct } = useAdmin();
  const [input, setInput] = useState({
    nameProduct: prod.nameProduct,
    descriptionCourse: prod.descriptionCourse,
    priceProduct: prod.priceProduct,
    descriptionLast: prod.descriptionLast,
    type: prod.type,
    inventory: prod.inventory,
    subject: prod.subjectcourse.subject,
    image: prod.courseImg,
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForms = async (e) => {
    e.preventDefault();

    try {
      startLoading();

      const formData = new FormData();

      formData.append("nameProduct", input.nameProduct);
      formData.append("descriptionCourse", input.descriptionCourse);
      formData.append("priceProduct", input.priceProduct);
      formData.append("descriptionLast", input.descriptionLast);
      formData.append("courseImg", file);
      formData.append("courseLink", file2);
      formData.append("type", input.type);
      formData.append("inventory", input.inventory);
      formData.append("subject", input.subject);

      const res = await adminService.updateCourse(id, formData);
      setAllProduct(res.data.courseUpdate);

      close();
      getProduct();
      toast.success("Edit success");
      // setInput({
      //   nameProduct: "",
      //   descriptionCourse: "",
      //   priceProduct: 0,
      //   descriptionLast: "",
      //   type: "offline",
      //   inventory: 0,
      //   subject: "Math",
      // });
      // setFile(null);
      // setFile2(null);

      navigate("/admin/course");
    } catch (err) {
      // res ถ้าเออเร่อ มันจะส่งเป็น err กลับมา
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div
      onClick={close}
      className="bg-opacity-70 bg-slate-500 fixed top-0 rounded mb-[100px] left-0 right-0 bottom-0 flex justify-center items-center z-50"
    >
      <div
        className="relative w-[700px] h-[400px] bg-white rounded overflow-auto border-red-600 border-2 flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl flex justify-center absolute border-red-400 border right-0 top-0 mr-2">
          <button type="button" onClick={close}>
            X
          </button>
        </div>

        <div className="justify-center flex h-full bg-gray-300 ">
          <div className="border-black border-2 flex mb-50 flex-col items-center  w-3/4  rounded-lg mt-20 shadow-lg">
            <span className="mt-10 text-xl font-bold mx-auto">
              Create Category
            </span>
            {/* <form onSubmit={handleSubmitForms}> */}
            <form onSubmit={handleSubmitForms}>
              <div className="flex justify-center ">
                <div
                  className=" p-7  flex flex-col justify-center mt-10 items-center border-r bg-indigo-200  rounded-l-lg cursor-pointer border-red-200 border-2 w-2/4"
                  onClick={() => inputEl.current.click()}
                >
                  <input
                    type="file"
                    className="hidden"
                    ref={inputEl}
                    onChange={(e) => {
                      console.dir(e);
                      // file อาจจะเป็น undefined ได้ ถ้าเขากด cancel
                      if (e.target.files[0]) {
                        setFile(e.target.files[0]);
                      }
                    }}
                  />

                  {file ? (
                    <img
                      className="w-full h-full"
                      // src={URL.createObjectURL(file)}
                      src={
                        typeof file === "string"
                          ? file
                          : URL.createObjectURL(file)
                      }
                      alt="profile"
                      sizes="xs"
                    />
                  ) : (
                    <>
                      <img
                        src={
                          input?.image ||
                          "https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-PNG-Photos.png"
                        }
                        className="rounded-full shadow-sm w-12 h-12"
                        alt="addpicture"
                      />
                    </>
                  )}

                  <span>upload picture</span>
                </div>
              </div>
              <div className=" w-[500px] mx-auto">
                <div className="flex flex-col items-start m-4  gap-3">
                  <div className="w-1/4 ">
                    <Label htmlFor="nameProduct" value="Course name :" />
                  </div>
                  <div className="w-full">
                    <TextInput
                      type="text"
                      placeholder="Your Course name"
                      name="nameProduct"
                      className="text-xs"
                      value={input.nameProduct}
                      onChange={handleChangeInput}
                      // setInput({...input,lastName: e.target.value})
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start m-4  gap-3">
                  <div className="w-1/4 ">
                    <Label
                      htmlFor="descriptionCourse"
                      value="Deatail Course :"
                    />
                  </div>
                  <div className="w-full">
                    <TextInput
                      id="descriptionCourse"
                      type="text"
                      name="descriptionCourse"
                      placeholder="Your Deatail Course"
                      value={input.descriptionCourse}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start m-4  gap-3">
                  <div className="block w-1/4">
                    <Label htmlFor="priceProduct" value="Price :" />
                  </div>
                  <div className="w-full">
                    <TextInput
                      id="priceProduct"
                      type="text"
                      name="priceProduct"
                      placeholder="Your Price"
                      value={input.priceProduct}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start m-4  gap-3">
                  <div className=" block w-1/4">
                    <Label
                      htmlFor="descriptionLast"
                      value="Detail Coures 2 :"
                    />
                  </div>
                  <div className="w-full">
                    <TextInput
                      id="descriptionLast"
                      type="text"
                      name="descriptionLast"
                      placeholder="Your Detail Coures 2"
                      value={input.descriptionLast}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start m-4  gap-3">
                  <div className="mb-2 block w-1/4">
                    <Label htmlFor="courseLink" value="Link OR Video :" />
                  </div>
                  <div className="w-full">
                    <input
                      type="file"
                      ref={inputEl2}
                      onChange={(e) => {
                        console.dir(e);
                        // file อาจจะเป็น undefined ได้ ถ้าเขากด cancel
                        if (e.target.files[0]) {
                          setFile2(e.target.files[0]);
                        }
                      }}
                    />
                    <div className="w-1/4 mt-3 h-1/4">
                      {file2 ? (
                        <img
                          className="w-full h-full"
                          src={URL.createObjectURL(file2)}
                          alt="Link"
                          sizes="xs"
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start m-4  gap-3">
                  <div className="block w-1/4">
                    <Label htmlFor="type" value="Type :" />
                  </div>
                  <div className="w-full">
                    <Select
                      id="type"
                      name="type"
                      value={input.type}
                      onChange={handleChangeInput}
                    >
                      <option value="offline">Offline</option>
                      <option value="online">Online</option>
                    </Select>
                  </div>
                </div>

                {input.type === "online" ? (
                  <div className="flex flex-col items-start m-4  gap-3">
                    <div className="mb-2  w-1/4">
                      <Label htmlFor="inventory" value="Stock :" />
                    </div>
                    <div className="w-full">
                      <TextInput
                        id="inventory"
                        type="text"
                        name="inventory"
                        placeholder="Your Stock"
                        value={input.inventory}
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="flex flex-col items-start m-4  gap-3">
                  <div className="block w-1/4">
                    <Label htmlFor="subject" value="Subject :" />
                  </div>
                  <div className="w-full">
                    <Select
                      id="subject"
                      name="subject"
                      value={input.subject}
                      onChange={handleChangeInput}
                    >
                      {allcategory.map((item) => (
                        <option key={item.id} value={item.subject}>
                          {item.subject}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="flex justify-center items-start m-5">
                  <div className="flex justify-start gap-5">
                    <Button type="submit" size="xs">
                      Submit
                    </Button>
                    <Button
                      type="reset"
                      size="xs"
                      onClick={() => {
                        setInput({
                          nameProduct: "",
                          descriptionCourse: "",
                          priceProduct: 0,
                          descriptionLast: "",
                          type: "offline",
                          inventory: 0,
                          subject: "Math",
                        });
                        setFile(null);
                        setFile2(null);
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mymodal;