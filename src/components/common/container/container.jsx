import * as S from './container.styled';

const Container = ({ children, className, ...props }) => (
  <S.Container className={className} {...props}>{children}</S.Container>
);

export default Container;
