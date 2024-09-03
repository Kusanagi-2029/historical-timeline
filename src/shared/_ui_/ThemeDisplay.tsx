import { ThemeDisplayProps } from './_types_/sharedUI.types';

import React from 'react';

/**
 * Компонент отображения Темы выбранного временного отрезка
 */
const ThemeDisplay: React.FC<ThemeDisplayProps> = ({
  theme,
  isMobile,
  themeContainerDesktop,
  themeContainerMobile,
}) => {
  return <h2 className={!isMobile ? themeContainerDesktop : themeContainerMobile}>{theme || 'Нет темы'}</h2>;
};

export default ThemeDisplay;
