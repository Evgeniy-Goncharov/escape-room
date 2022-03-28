import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const SERVER_URL = 'http://localhost:3001';

const COORDS = [59.96848, 30.31774];

const TABS = [
  {
    title: "Все квесты",
    value: "",
    icon: IconAllQuests
  },
  {
    title: "Приключения",
    value: "adventures",
    icon: IconAdventures
  },
  {
    title: "Ужасы",
    value: "horror",
    icon: IconHorrors
  },
  {
    title: "Мистика",
    value: "mystic",
    icon: IconMystic
  },
  {
    title: "Детектив",
    value: "detective",
    icon: IconDetective
  },
  {
    title: "Sci-fi",
    value: "sci-fi",
    icon: IconScifi
  },
]

const TYPES = {
  horror: "ужасы"
};

const LEVELS = {
  easy: "простой",
  medium: "средний",
  hard: "тяжелый"
}

export { SERVER_URL, TYPES, LEVELS, TABS, COORDS };
