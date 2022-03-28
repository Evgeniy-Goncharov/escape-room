import * as S from './quests-catalog.styled';
import { QuestCard, TabBtn } from '../components';
import { useState, useEffect } from 'react';
import { getData } from 'functions/api/api';
import { SERVER_URL, TABS } from 'functions/consts/consts';

const QuestsCatalog = () => {
  const [quests, setQuests] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => getData(`${SERVER_URL}/quests`, setQuests), [])

  return (
    <>
      {TABS?.length &&
        <S.Tabs>
          {TABS.map(tab => (
            <S.TabItem key={tab.title}>
              <TabBtn
                title={tab.title}
                value={tab.value}
                iconComponent={tab.icon}
                isActive={tab.value === type}
                onClick={setType}
              />
            </S.TabItem>
          ))}
        </S.Tabs>
      }
      {quests?.length && (
        <S.QuestsList>
          {quests
            .filter(quest => {
              if (type) {
                return quest.type === type;
              }

              return true;
            })
            .map(quest => (
              <S.QuestItem key={quest.id}>
                <QuestCard quest={quest} />
              </S.QuestItem>
            ))
          }
        </S.QuestsList>
      )}
    </>
  )
};

export default QuestsCatalog;
