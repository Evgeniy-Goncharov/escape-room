import styled from 'styled-components';

const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;

  @media (max-width: 1110px) {
    align-self: center;
  }
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 40px;
  max-width: 190px;
  margin-bottom: 20px;

  &:not(:last-of-type) {
    padding-right: 40px;
    margin-right: 39px;
    border-right: 1px solid ${({ theme }) => theme.color.gray};
  }

  @media (max-width: 1110px) {
    &:not(:last-of-type) {
      padding-right: 30px;
      margin-right: 29px;
    }
  }
`;

const QuestsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 344px);
  gap: 32px 24px;

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, minmax(303px, 1fr));
  }
`;

const QuestItem = styled.li``;

export {
  Tabs,
  TabItem,
  QuestsList,
  QuestItem,
};
