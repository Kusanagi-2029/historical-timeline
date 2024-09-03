import useDeviceDetect from '../../../../../shared/hooks/useDeviceDetect';
import { updateDatesWithAnimation } from '../../helpers/updateDatesWithAnimation';
import TimelineDots from './TimelineDots/TimelineDots';
import TimelinePresenter from './TimelinePresenter';
import { TimelineContainerProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Компонент контейнера для шкалы временных отрезков.
 */
const TimelineContainer: React.FC<TimelineContainerProps> = ({ activePeriod, timelineData, onPeriodChange }) => {
  const circleRef = useRef<SVGSVGElement>(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const textRefs = useRef<(SVGTextElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useDeviceDetect();
  const [startDate, setStartDate] = useState<string>('2000');
  const [endDate, setEndDate] = useState<string>('2000');

  const periodData = timelineData[activePeriod - 1] || {};

  useEffect(() => {
    if (circleRef.current) {
      const totalPeriods = timelineData.length;
      const targetAngle = ((activePeriod - 3 + totalPeriods) % totalPeriods) * (360 / totalPeriods);

      circleRef.current.style.transform = `rotate(-${targetAngle}deg)`;

      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          circle.setAttribute('r', index + 1 === activePeriod ? '16' : '2');
        }
      });

      textRefs.current.forEach((textEl, index) => {
        if (textEl) {
          textEl.style.transform = `rotate(${targetAngle}deg)`;
          textEl.style.opacity = index + 1 === activePeriod ? '1' : '0';
        }
      });
    }
    setHoveredIndex(null);

    const newPeriodData = timelineData[activePeriod - 1];
    if (newPeriodData) {
      const newStartDate = newPeriodData.events[0]?.date || 'Нет данных';
      const newEndDate = newPeriodData.events[newPeriodData.events.length - 1]?.date || 'Нет данных';

      updateDatesWithAnimation(startDate, endDate, newStartDate, newEndDate, setStartDate, setEndDate);
    }
  }, [activePeriod, timelineData]);

  /**
   * Обработчик события наведения мыши на кружочка.
   */
  const handleMouseEnter = (index: number) => {
    if (index + 1 !== activePeriod) {
      setHoveredIndex(index);
      if (circleRefs.current[index]) {
        circleRefs.current[index].setAttribute('r', '16');
      }
      if (textRefs.current[index]) {
        textRefs.current[index].style.opacity = '1';
      }
    }
  };

  /**
   * Обработчик события покидания мыши с кружочка.
   */
  const handleMouseLeave = (index: number) => {
    if (index + 1 !== activePeriod) {
      setHoveredIndex(null);
      if (circleRefs.current[index]) {
        circleRefs.current[index].setAttribute('r', '2');
      }
      if (textRefs.current[index]) {
        textRefs.current[index].style.opacity = '0';
      }
    }
  };

  return (
    <TimelinePresenter
      periodData={periodData}
      startDate={startDate}
      endDate={endDate}
      isMobile={isMobile}
      circleRef={circleRef}
    >
      <TimelineDots
        totalPeriods={timelineData.length}
        activePeriod={activePeriod}
        hoveredIndex={hoveredIndex}
        onPeriodChange={onPeriodChange}
        circleRefs={circleRefs}
        textRefs={textRefs}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isMobile={isMobile}
      />
    </TimelinePresenter>
  );
};

export default TimelineContainer;
