import Title from '../../../shared/_ui_/TitleBlock/TitleBlock';
import useDeviceDetect from '../../../shared/hooks/useDeviceDetect';
import { loadFromStorage, saveToStorage } from '../../../storage/storage';
import { getTimelineData } from '../api/getTimelineData';
import { TimelineBlockProps, TimelinePeriod } from '../types/timeLineBlocks.types';
import DateSelectorContainer from './components/DateSelector';
import Slider from './components/Slider';
import Timeline from './components/Timeline';

import React, { useEffect, useState } from 'react';

import styles from './TimelineBlockWrapper.module.scss';

/**
 * Компонент-обёртка модуля для отображения всего, связанного с временными отрезками
 * Этот компонент управляет состоянием активного периода и загружает данные шкалы временных отрезков.
 * Он также определяет, является ли устройство мобильным, чтобы адаптировать отображение.
 *
 * props.id - Уникальный идентификатор для временного блока, используемый для изоляции состояния таких одинаковых блоков друг от друга.
 */
const TimelineBlock: React.FC<TimelineBlockProps> = ({ id }) => {
  const [activePeriod, setActivePeriod] = useState<number>(() => loadFromStorage(`activePeriod_${id}`) || 1);
  const [timelineData, setTimelineData] = useState<TimelinePeriod[]>([]);
  const isMobile = useDeviceDetect();

  useEffect(() => {
    getTimelineData().then(data => {
      setTimelineData(data);
    });
  }, []);

  useEffect(() => {
    saveToStorage(`activePeriod_${id}`, activePeriod);
  }, [activePeriod, id]);

  const handlePeriodChange = (newPeriod: number) => {
    setActivePeriod(newPeriod);
  };

  return (
    <div className={!isMobile ? styles.timelineBlock : styles.timelineBlockMobile}>
      <Title isMobile={isMobile} text={'Исторические даты'}></Title>
      <div className={!isMobile ? styles.content : styles.contentMobile}>
        <DateSelectorContainer
          activePeriod={activePeriod}
          periods={timelineData.length}
          onChange={handlePeriodChange}
        />
        <Timeline activePeriod={activePeriod} timelineData={timelineData} onPeriodChange={handlePeriodChange} />
        <Slider events={timelineData[activePeriod - 1]?.events || []} activePeriod={activePeriod} id={id} />
      </div>
      <div className={!isMobile ? styles.verticalLine : styles.verticalLineMobile} />
      <div className={!isMobile ? styles.horizontalLine : styles.horizontalLineMobile} />
    </div>
  );
};

export default TimelineBlock;
