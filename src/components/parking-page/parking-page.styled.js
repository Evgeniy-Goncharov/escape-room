import { Container, PageTitle } from "components/common/common";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled(Container)`
  padding-top: 200px;
`;

export const Title = styled(PageTitle)`
  margin-bottom: 50px;
`;

export const Home = styled(Link)`
  &:hover,
  &:focus {
    color: ${({theme}) => theme.color.tangerine};
  }
`;
