import useDeviceDetect from '../../../../../shared/hooks/useDeviceDetect';
import DateSelector from './DateSelectorPresenter';
import { DateSelectorContainerProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React from 'react';

/**
 * Компонент контейнера для выбора даты (временного отрезка).
 */
const DateSelectorContainer: React.FC<DateSelectorContainerProps> = ({ activePeriod, periods, onChange }) => {
  const isMobile = useDeviceDetect();

  /**
   * Обработчик клика по кнопке "Предыдущий временной отрезок".
   * @function handlePrevClick
   * @returns {void}
   */
  const handlePrevClick = (): void => {
    if (activePeriod > 1) onChange(activePeriod - 1);
  };

  /**
   * Обработчик клика по кнопке "Следующий временной отрезок".
   * @function handleNextClick
   * @returns {void}
   */
  const handleNextClick = (): void => {
    if (activePeriod < periods) onChange(activePeriod + 1);
  };

  return (
    <DateSelector
      activePeriod={activePeriod}
      periods={periods}
      onPrevClick={handlePrevClick}
      onNextClick={handleNextClick}
      isMobile={isMobile}
    />
  );
};

export default DateSelectorContainer;
