import { DateDisplayProps } from './_types_/sharedUI.types';

import React from 'react';

/**
 * Компонент отображения Даты в счётчике (н-р, кнопочного селектора)
 */
const DateDisplay: React.FC<DateDisplayProps> = ({ activePeriod, totalPeriods }) => {
  return <span>{`${String(activePeriod).padStart(2, '0')}/${String(totalPeriods).padStart(2, '0')}`}</span>;
};

export default DateDisplay;
