import { NavButtonContainerProps } from '../_types_/sharedUI.types';
import NavButton from './NavButton/NavButton';

import React from 'react';

import styles from './NavButtonContainer.module.scss';

/**
 * Компонент контейнера кнопок для навигации
 */
const NavButtonContainer: React.FC<NavButtonContainerProps> = ({ isMobile, onNavigate }) => {
  return (
    <div className={isMobile ? styles.buttonContainerMobile : styles.buttonContainer}>
      <NavButton text="На 3 блока" onClick={() => onNavigate('/3')} />
      <NavButton text="На Error404" onClick={() => onNavigate('/error404')} />
      <NavButton text="Не найдено" onClick={() => onNavigate('/123456789qwerty')} />
      <NavButton text="На Error503" onClick={() => onNavigate('/error503')} />
    </div>
  );
};

export default NavButtonContainer;
