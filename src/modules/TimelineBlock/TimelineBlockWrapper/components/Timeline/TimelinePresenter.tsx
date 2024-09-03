import ThemeDisplay from '../../../../../shared/_ui_/ThemeDisplay';
import DateDisplayTimeline from './DateDisplayTimeline';
import { TimelinePresenterProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React from 'react';

import styles from './Timeline.module.scss';

/**
 * Компонент для отображения шкалы временных отрезков.
 */
const TimelinePresenter: React.FC<TimelinePresenterProps> = ({
  periodData,
  startDate,
  endDate,
  isMobile,
  circleRef,
  children,
}) => {
  return (
    <div className={!isMobile ? styles.timeline : styles.timelineMobile}>
      <ThemeDisplay
        theme={periodData.theme}
        isMobile={isMobile}
        themeContainerDesktop={styles.themeContainer}
        themeContainerMobile={styles.themeContainerMobile}
      />
      <DateDisplayTimeline
        startDate={startDate}
        endDate={endDate}
        isMobile={isMobile}
        classNameContainerDesktop={styles.dateContainer}
        classNameContainerMobile={styles.dateContainerMobile}
        classNameStartDateDesktop={styles.startDate}
        classNameStartDateMobile={styles.startDateMobile}
        classNameEndDate={styles.endDate}
        classNameEndDateMobile={styles.endDateMobile}
      />
      <div className={!isMobile ? styles.center : styles.centerMobile}>
        {!isMobile && (
          <svg width="400" height="400" viewBox="-200 -200 400 400" ref={circleRef}>
            <circle r="160" fill="none" stroke="#ccc" strokeWidth="1" />
            {children} {/* Отображаем TimelineDots здесь */}
          </svg>
        )}
        {isMobile && <div className={styles.mobileDotsContainer}>{children}</div>}
      </div>
    </div>
  );
};

export default TimelinePresenter;
