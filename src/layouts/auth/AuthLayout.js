import { Outlet } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import Container from '../container/Container';
// import Header from '../header/Header';

function AuthLayout() {
  return (
    <>
      {/* <Header /> */}
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      {/* <Footer/> */}
    </>
  );
}

export default AuthLayout;
