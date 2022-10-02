import React from 'react';

function LoginForm() {
  return (
    <div className="flex flex-col items-start gap-12 w-[460px] h-[367px]">
      <div className="lg-h3 ">Login</div>
      <form className="flex flex-col items-start p-0 gap-[16px] w-[460px] h-[164px]">
        <div className="lg-subtitle-1">Email</div>
        <input type="text" className="w-[460px]" />
        <div className="lg-subtitle-1">Password</div>
        <div className="relative">
          <input type="text" className="w-[460px] " />
          <i className="fa-regular fa-eye-slash absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 cursor-auto"></i>
        </div>
      </form>
      <div className="flex flex-col items-start p-0 gap-[16px] w-[460px] h-[87px]">
        <button className="bg-black flex justify-center items-center p-[8px] gap-[8px] w-[460px] h-[52px] cursur-auto">
          <div className="lg-button-large text-white">Sign In</div>
        </button>
        <div className="flex items-start pt-0 px-0 pb-[2px] w-[191px] h-[19px] border-b-[1px]">
          <button className="lg-button-medium cursor-auto hover:text-red-300 ">
            forgot your password
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
