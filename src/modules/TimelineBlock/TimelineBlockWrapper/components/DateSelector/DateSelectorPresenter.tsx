import ArrowButton from '../../../../../shared/_ui_/ArrowButton';
import DateDisplay from '../../../../../shared/_ui_/DateDisplay';
import { ReactComponent as ArrowIcon } from '../../../../../shared/icons/Arrow1.svg';
import { ReactComponent as ArrowIconMobile } from '../../../../../shared/icons/ArrowMobile1.svg';
import { DateSelectorPresenterProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React from 'react';

import styles from './DateSelector.module.scss';

/**
 * Компонент для отображения кнопочного селектора дат (временных отрезков).
 */
const DateSelectorPresenter: React.FC<DateSelectorPresenterProps> = ({
  activePeriod,
  periods,
  onPrevClick,
  onNextClick,
  isMobile,
}) => {
  return (
    <>
      {!isMobile ? (
        <div className={styles.dateSelector}>
          <DateDisplay activePeriod={activePeriod} totalPeriods={periods} />
          <div className={styles.switchButtonsContainer}>
            <ArrowButton
              onClick={onPrevClick}
              disabled={activePeriod === 1}
              Icon={ArrowIcon}
              className={styles.prevButton}
            />
            <ArrowButton
              onClick={onNextClick}
              disabled={activePeriod === periods}
              Icon={ArrowIcon}
              className={styles.nextButton}
            />
          </div>
        </div>
      ) : (
        <div className={styles.dateSelectorMobile}>
          <span className={styles.spanMobile}>
            <DateDisplay activePeriod={activePeriod} totalPeriods={periods} />
          </span>
          <div className={styles.switchButtonsContainerMobile}>
            <ArrowButton
              onClick={onPrevClick}
              disabled={activePeriod === 1}
              Icon={ArrowIconMobile}
              className={styles.prevButtonMobile}
            />
            <ArrowButton
              onClick={onNextClick}
              disabled={activePeriod === periods}
              Icon={ArrowIconMobile}
              className={styles.nextButtonMobile}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DateSelectorPresenter;
