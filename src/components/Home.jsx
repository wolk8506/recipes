import { IconPrrvyeBlyuda } from 'img/icon_1';
import { IconNapitki } from 'img/icon_8';
import { IconVypechka } from 'img/icon_4';
import { IconVtoryeBlyuda } from 'img/icon_3';
import { IconSalaty } from 'img/icon_2';
import { IconZagotovki } from 'img/icon_5';
import { IconSousy } from 'img/icon_9';
import { IconZakuski } from 'img/icon_7';
import { IconDeserty } from 'img/icon_6';
import { Link } from 'react-router-dom';
import s from '../css/Home.module.css';

export const Home = () => {
  return (
    <>
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          textTransform: 'uppercase',
          color: '#ffffff',
        }}
      >
        <ul className={s.menuList}>
          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/soup">
              <IconPrrvyeBlyuda /> Первые блюда
            </Link>
          </li>
          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/meat">
              <IconVtoryeBlyuda /> Вторые блюда
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/salad">
              <IconSalaty /> Салаты
            </Link>
          </li>
          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/zakuski">
              <IconZakuski /> Закуски
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/cakes">
              <IconVypechka /> Выпечка
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/desert">
              <IconDeserty /> Десерты
            </Link>
          </li>

          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/cocktails">
              <IconNapitki /> Коктейли
            </Link>
          </li>
          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/sousy">
              <IconSousy /> Соусы
            </Link>
          </li>
          <li className={s.menuItem}>
            <Link className={s.linckPeople} to="/zagotovki">
              <IconZagotovki /> Заготовки на зиму
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
