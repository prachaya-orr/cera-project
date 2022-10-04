import { Outlet } from 'react-router-dom';
import UserNavbar from '../../components/UserNavbar';
import Container from '../container/Container';

function AuthLayout() {
  return (
    <>
      <UserNavbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;
