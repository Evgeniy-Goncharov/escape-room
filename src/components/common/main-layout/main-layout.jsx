import { Header, Footer } from 'components/common/common';

const MainLayout = ({ children, pathName }) => (
  <>
    <Header pathName={pathName} />
    {children}
    <Footer />
  </>
);

export default MainLayout;
