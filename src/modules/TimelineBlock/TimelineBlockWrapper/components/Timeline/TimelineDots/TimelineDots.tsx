import { TimelineDotsProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React from 'react';

import styles from '../Timeline.module.scss';

/**
 * Компонент для отображения точек шкалы временных отрезков.
 */
const TimelineDots: React.FC<TimelineDotsProps> = ({
  totalPeriods,
  activePeriod,
  hoveredIndex,
  onPeriodChange,
  circleRefs,
  textRefs,
  handleMouseEnter,
  handleMouseLeave,
  isMobile,
}) => {
  const radius = 160;

  if (isMobile) {
    // Рендер временных точек для мобильных устройств
    return (
      <div className={styles.mobileDotsContainer}>
        {Array.from({ length: totalPeriods }, (_, index) => (
          <button
            key={index}
            className={`${styles.mobileDot} ${index + 1 === activePeriod ? styles.activeDot : ''}`}
            onClick={() => onPeriodChange(index + 1)}
          />
        ))}
      </div>
    );
  }

  // Рендер временных точек для десктопа
  return (
    <>
      {Array.from({ length: totalPeriods }, (_, index) => {
        const angle = (index / totalPeriods) * 2 * Math.PI - Math.PI / 1;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        const isActive = index + 1 === activePeriod;
        const isHovered = index === hoveredIndex;

        return (
          <g key={index} transform={`translate(${x}, ${y})`}>
            <circle
              r={isActive ? 16 : 2}
              className={`${styles.timelineDot} ${isActive ? styles.activeDot : ''} ${isHovered ? styles.hoveredDot : ''}`}
              ref={(el: SVGCircleElement | null) => {
                if (circleRefs.current) {
                  circleRefs.current[index] = el;
                }
              }}
              onMouseEnter={() => !isActive && handleMouseEnter(index)}
              onMouseLeave={() => !isActive && handleMouseLeave(index)}
              onClick={() => onPeriodChange(index + 1)}
            />
            <text
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="central"
              ref={(el: SVGTextElement | null) => {
                if (textRefs.current) {
                  textRefs.current[index] = el;
                }
              }}
              className={`${isActive || isHovered ? styles.active : ''} ${styles.timelineText}`}
            >
              {index + 1}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default TimelineDots;
