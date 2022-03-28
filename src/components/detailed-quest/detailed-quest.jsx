import { useState, useEffect } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { getData } from 'functions/api/api';
import Page404 from 'components/page-404/page-404';
import { LEVELS, SERVER_URL, TYPES } from 'functions/consts/consts';

const DetailedQuest = ({ id, pathName }) => {
  console.log(pathName);
  const [quest, setQuest] = useState({});
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  useEffect(() => getData(`${SERVER_URL}/quests/${id}`, setQuest), [id]);

  const {coverImg, title, type, duration, peopleCount, level, description} = quest;

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const handleCloseBtnClick = () => {
    setIsBookingModalOpened(false);
  }

  return quest ? (
    <MainLayout pathName={pathName}>
      <S.Main>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{TYPES[type]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount && `${peopleCount[0]} – ${peopleCount[1]} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{`${LEVELS[level]}`}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseClick={handleCloseBtnClick} />}
      </S.Main>
    </MainLayout>
  ) : <Page404 />;
};

export default DetailedQuest;
