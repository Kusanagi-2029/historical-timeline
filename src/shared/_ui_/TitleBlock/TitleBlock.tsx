import { TitleProps } from '../_types_/sharedUI.types';

import React from 'react';

import styles from './TitleBlock.module.scss';

/**
 * Компонент Оглавления страницы
 */
const Title: React.FC<TitleProps> = ({ isMobile, text }) => {
  return (
    <h1 className={!isMobile ? styles.title : styles.titleMobile}>
      <div className={!isMobile ? styles.gradientBar : styles.gradientBarMobile} />
      <div className={!isMobile ? styles.titleText : styles.titleTextMobile}>{text}</div>
    </h1>
  );
};

export default Title;
