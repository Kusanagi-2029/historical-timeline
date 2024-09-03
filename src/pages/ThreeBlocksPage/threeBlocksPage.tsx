import TimelineBlock from '../../modules/TimelineBlock/TimelineBlockWrapper';

import React from 'react';

import { useNavigate } from 'react-router-dom';
import NavButton from 'shared/_ui_/NavButtons/NavButton/NavButton';

import styles from '../MainPage/mainPage.module.scss';

/**
 * Компонент страницы с Тремя блоками временных отрезков для демонстрации изолированности их логики и вёрстки
 */
const threeBlocksPage: React.FC = () => {
  const navigate = useNavigate();

  /** Обработчик навигации */
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className={styles.threeBlocksPage}>
      <div className={styles.toMainPageButton}>
        <NavButton text="На Главную" onClick={() => handleNavigate('/')} />
      </div>
      <TimelineBlock id="timeline1" />
      <TimelineBlock id="timeline2" />
      <TimelineBlock id="timeline3" />
    </div>
  );
};

export default threeBlocksPage;
