import * as S from './tab-btn.styled.js';

const TabBtn = ({
  title,
  value,
  iconComponent,
  isActive,
  onClick
}) => {
  const IconComponent = iconComponent;

  return (
  <S.TabBtn
    isActive={isActive}
    onClick={() => onClick && onClick(value)}
  >
          {iconComponent && <IconComponent />}
          <S.TabTitle>{title}</S.TabTitle>
  </S.TabBtn>
)};

export default TabBtn;
