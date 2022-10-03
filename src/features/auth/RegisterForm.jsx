import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { validateRegister } from '../../validations/userValidate';

function RegisterForm() {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      startLoading();
      await register(input);
      setInput({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      toast.success('success register');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="flex flex-col items-start p-[48px] gap-[48px] w-[556px] h-[872px] bg-[#FAFAFA]">
      <div className="flex flex-col items-start p-0 gap-[8px] w-[260px] h-[74px]">
        <div className="text-[#4425FF]"> New Rookie Here?! 👋🏻</div>
        <div className="lg-h3">Create Account</div>
      </div>
      <div className="flex flex-col items-start p-0 gap-[24px] w-[460px] h-[654px]">
        <div>
          <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col items-start p-0 gap-[16px] w-[460px] h-[524px]">
              <div className="lg-subtitle-1">First Name</div>
              <input
                name="firstName"
                type="text"
                className="w-[460px]"
                placeholder="First name"
                value={input.firstName}
                onChange={handleChangeInput} // e =>setInput({...input, firtName: e.target.value})
              />
              <div className="lg-subtitle-1">Last Name</div>
              <input
                name="lastName"
                type="text"
                className="w-[460px]"
                placeholder="Last name"
                value={input.lastName}
                onChange={handleChangeInput}
              />
              <div className="lg-subtitle-1">Email</div>
              <input
                name="email"
                type="text"
                className="w-[460px]"
                placeholder="Email address"
                value={input.email}
                onChange={handleChangeInput}
              />
              <div className="lg-subtitle-1">Password</div>
              <div className="relative">
                <input
                  name="password"
                  type="text"
                  className="w-[460px] "
                  placeholder="password"
                  value={input.password}
                  onChange={handleChangeInput}
                />
                <i className="fa-regular fa-eye-slash absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 cursor-auto"></i>
              </div>
              <div className="lg-subtitle-1">Re-Enter Password</div>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type="text"
                  className="w-[460px]"
                  placeholder="Confirm password"
                  value={input.confirmPassword}
                  onChange={handleChangeInput}
                />
                <i className="fa-regular fa-eye-slash absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 cursor-auto"></i>
              </div>
              <div className="w-[460px] h-[30px] p-0">
                <input
                  id="policy"
                  name="acceptPolicy"
                  value="true"
                  type="checkbox"
                  className="mb-1"
                />
                <label htmlFor="policy">
                  <span> </span>
                  <span>
                    I agree to The Use of Personal Data For Marketing Purposes.
                    In Accordance To Privacy Policy
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <button
          onClick={handleSubmitForm}
          className="bg-[#4425FF] flex justify-center items-center p-[8px] gap-[8px] w-[460px] h-[52px] cursur-auto"
        >
          <div className="lg-button-large text-white">Create New Account</div>
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
