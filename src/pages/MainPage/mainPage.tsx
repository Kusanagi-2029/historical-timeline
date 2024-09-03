import React from 'react';

import TimelineBlock from 'modules/TimelineBlock/TimelineBlockWrapper';
import { useNavigate } from 'react-router-dom';
import NavButtonContainer from 'shared/_ui_/NavButtons/NavButtonContainer';
import useDeviceDetect from 'shared/hooks/useDeviceDetect';

import styles from './mainPage.module.scss';

/**
 * Компонент главной страницы (Домашней)
 */
const MainPage: React.FC = () => {
  const navigate = useNavigate();

  /** Обработчик навигации */
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isMobile = useDeviceDetect();

  return (
    <div className={isMobile ? styles.mainPageMobile : styles.mainPage}>
      <TimelineBlock id="timeline1" />
      <NavButtonContainer isMobile={isMobile} onNavigate={handleNavigate} />
    </div>
  );
};

export default MainPage;
