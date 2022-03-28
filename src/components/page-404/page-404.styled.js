import { Link } from "react-router-dom";
import styled from "styled-components";

export const Home = styled(Link)`
  &:hover,
  &:focus {
    color: ${({theme}) => theme.color.tangerine};
  }
`;
