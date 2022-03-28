import { MainLayout } from "components/common/common";
import * as S from "./parking-page.styled";

const ParkingPage = ({ pathName }) => (
  <MainLayout pathName={pathName}>
    <S.Main forwardedAs="main">
      <S.Title>Данная страница еще находится в разработке, но мы скоро все сделаем!</S.Title>
      <S.Home to="/">Перейти на главную &rarr;</S.Home>
    </S.Main>
  </MainLayout>
);

export default ParkingPage;
