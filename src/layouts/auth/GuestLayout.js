import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Container from '../container/Container';

function GuestLayout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default GuestLayout;
