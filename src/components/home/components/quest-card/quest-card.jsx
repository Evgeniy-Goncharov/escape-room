import * as S from "./quest-card.styled";
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { LEVELS } from "functions/consts/consts";

const QuestCard = ({
  quest: {
    title,
    previewImg,
    peopleCount,
    level,
    id
  }
}) => (
  <S.QuestItemLink to={`/detailed-quest/${id}`}>
    <S.Quest>
      <S.QuestImage
        src={previewImg}
        width="344"
        height="232"
        alt={`квест ${title}`}
      />

      <S.QuestContent>
        <S.QuestTitle>{title}</S.QuestTitle>

        <S.QuestFeatures>
          <S.QuestFeatureItem>
            <IconPerson />
            {peopleCount[0]}–{peopleCount[1]} чел
          </S.QuestFeatureItem>
          <S.QuestFeatureItem>
            <IconPuzzle />
            {LEVELS[level]}
          </S.QuestFeatureItem>
        </S.QuestFeatures>
      </S.QuestContent>
    </S.Quest>
  </S.QuestItemLink>
);

export default QuestCard;
