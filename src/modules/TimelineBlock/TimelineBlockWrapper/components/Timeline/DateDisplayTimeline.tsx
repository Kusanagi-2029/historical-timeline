import { DateDisplayTimelineProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React from 'react';

/**
 * Компонент для отображения дат начала и конца шкалы временных отрезков.
 */
const DateDisplayTimeline: React.FC<DateDisplayTimelineProps> = ({
  startDate,
  endDate,
  isMobile,
  classNameContainerDesktop,
  classNameContainerMobile,
  classNameStartDateDesktop,
  classNameStartDateMobile,
  classNameEndDate,
  classNameEndDateMobile,
}) => {
  return (
    <div className={!isMobile ? classNameContainerDesktop : classNameContainerMobile}>
      <span className={!isMobile ? classNameStartDateDesktop : classNameStartDateMobile}>{startDate}</span>
      <span className={!isMobile ? classNameEndDate : classNameEndDateMobile}>{endDate}</span>
    </div>
  );
};

export default DateDisplayTimeline;
