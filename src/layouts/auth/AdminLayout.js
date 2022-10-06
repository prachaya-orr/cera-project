import { Outlet } from 'react-router-dom';
import Container from '../container/Container';

function AdminLayout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AdminLayout;
