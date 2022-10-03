import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthForm() {
  return (
    <>
      <div className="flex items-center py-0 px-[88px] gap-[10px] mt-[48px]">
        <Link to={'/'} className='flex flex-row gap-1'>
          <p className="lg-subtitle-1">Home </p>
          <p className="lg-subtitle-1"> &gt; </p>
          <p className='lg-subtitle-1 font-normal'>User</p>
        </Link>
      </div>
      <div className="flex flex-col p-0 gap-[108px]">
        <div className="flex justify-between items-start py-0 px-[176px] mx-auto mt-[108px] w-[1440px] h-[782px]">
          <LoginForm />
          <RegisterForm />
        </div>
        <div className="w-100 h-[392px] bg-apple mt-[108px]"> footer </div>
      </div>
    </>
  );
}

export default AuthForm;
