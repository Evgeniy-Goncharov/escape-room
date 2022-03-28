import { Container } from "components/common/common";
import { Home } from "./page-404.styled";

const Page404 = () => (
  <Container as="main">
    <h1>404 Not Found</h1>
    <Home to={"/"}>Вернуться на главную страницу</Home>
  </Container>
);

export default Page404;
