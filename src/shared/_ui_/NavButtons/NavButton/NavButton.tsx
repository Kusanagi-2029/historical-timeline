import { NavButtonProps } from 'shared/_ui_/_types_/sharedUI.types';

import React from 'react';

import styles from './NavButton.module.scss';

/**
 * Компонент кнопки для навигации
 */
const NavButton: React.FC<NavButtonProps> = ({ isErrorPage, text, onClick }) => {
  return (
    <button className={isErrorPage ? styles.errorButton : styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default NavButton;
