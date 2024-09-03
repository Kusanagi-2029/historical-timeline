import ArrowButton from '../../../../../shared/_ui_/ArrowButton';
import EventCard from '../../../../../shared/_ui_/EventCard';
import { ReactComponent as ArrowIcon } from '../../../../../shared/icons/Arrow2.svg';
import { SliderPresenterProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import styles from './Slider.module.scss';

/**
 * Компонент для отображения слайдера.
 */
const SliderPresenter: React.FC<SliderPresenterProps> = ({
  events,
  swiperParams,
  isMobile,
  swiperInstance,
  setSwiperInstance,
  updateButtonVisibility,
  isStartVisible,
  isEndVisible,
  id,
}) => {
  const eventCardStyles = {
    eventCard: styles.eventCard,
    eventDate: styles.eventDate,
    eventDescription: styles.eventDescription,
  };

  return (
    <div className={!isMobile ? styles.sliderWrapper : styles.sliderWrapperMobile}>
      <div className={styles.sliderContainer}>
        <Swiper
          {...swiperParams}
          className={!isMobile ? styles.slider : styles.sliderMobile}
          onInit={swiper => {
            setSwiperInstance(swiper);
            updateButtonVisibility(swiper);
          }}
          onSlideChange={() => {
            if (swiperInstance) {
              updateButtonVisibility(swiperInstance);
            }
          }}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard date={event.date} description={event.description} styles={eventCardStyles} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Отображаем кнопки только на не мобильных устройствах */}
        {!isMobile && (
          <>
            <ArrowButton
              onClick={() => swiperInstance?.slidePrev()}
              disabled={swiperInstance?.isBeginning ?? true}
              Icon={ArrowIcon}
              className={`${styles.prevButton} ${styles.prevButton}-${id} ${!isStartVisible ? styles.hidden : ''}`}
            />
            <ArrowButton
              onClick={() => swiperInstance?.slideNext()}
              disabled={swiperInstance?.isEnd ?? true}
              Icon={ArrowIcon}
              className={`${styles.nextButton} ${styles.nextButton}-${id} ${!isEndVisible ? styles.hidden : ''}`}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SliderPresenter;
