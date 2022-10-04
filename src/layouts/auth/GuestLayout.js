import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Container from '../container/Container';

function GuestLayout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default GuestLayout;
