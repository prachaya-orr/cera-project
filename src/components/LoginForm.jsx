import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Email
        </label>
        <input
          type="email"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Email"
          style={{ transition: 'all .15s ease' }}
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          Password
        </label>
        <input
          type="password"
          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
          placeholder="Password"
          style={{ transition: 'all .15s ease' }}
        />
      </div>
      <div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            id="customCheckLogin"
            type="checkbox"
            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
            style={{ transition: 'all .15s ease' }}
          />
          <span className="ml-2 text-sm font-semibold text-gray-700">
            Remember me
          </span>
        </label>
      </div>

      <div className="text-center mt-6">
        <button
          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
          type="button"
          style={{ transition: 'all .15s ease' }}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
