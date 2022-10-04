import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import UserNavbar from '../../components/UserNavbar';
import Container from '../container/Container';

function AuthLayout() {
  return (
    <>
      <UserNavbar />
      <Container>
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
}

export default AuthLayout;
