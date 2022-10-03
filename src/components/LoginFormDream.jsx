import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';


function LoginForm() {
  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      toast.success('success login');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };
  
  return (
    <form onSubmit={handleSubmitForm}>
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
          name='email'
          style={{ transition: 'all .15s ease' }}
          value={input.email}
          onChange={handleChangeInput}
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
          name="password"
          value={input.password}
          onChange={handleChangeInput}
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
          style={{ transition: 'all .15s ease' }}
          onClick={handleSubmitForm}
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
