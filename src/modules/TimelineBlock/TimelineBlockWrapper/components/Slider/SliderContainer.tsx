import useDeviceDetect from '../../../../../shared/hooks/useDeviceDetect';
import Slider from './SliderPresenter';
import { SliderContainerProps } from 'modules/TimelineBlock/types/timeLineBlocks.types';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Navigation, Swiper as SwiperType } from 'swiper';
import { SwiperProps } from 'swiper/react';

import styles from './Slider.module.scss';

const SliderContainer: React.FC<SliderContainerProps> = ({ events, activePeriod, id }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isStartVisible, setIsStartVisible] = useState<boolean>(false);
  const [isEndVisible, setIsEndVisible] = useState<boolean>(true);
  const prevActivePeriodRef = useRef(activePeriod);
  const isMobile = useDeviceDetect();

  const swiperParams: SwiperProps = {
    modules: [Navigation],
    spaceBetween: 20,
    slidesPerView: 'auto',
    centeredSlides: false,
    navigation: {
      nextEl: `.${styles.nextButton}-${id}`,
      prevEl: `.${styles.prevButton}-${id}`,
    },
    onSwiper: (swiper: SwiperType) => {
      setSwiperInstance(swiper);
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        centeredSlides: false,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 15,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
  };

  const updateButtonVisibility = useCallback((swiper: SwiperType) => {
    const { isBeginning, isEnd } = swiper;
    setIsStartVisible(!isBeginning);
    setIsEndVisible(!isEnd);

    if (isBeginning && isEnd) {
      setIsStartVisible(false);
      setIsEndVisible(false);
    }

    if (isBeginning) {
      setIsStartVisible(false);
      setIsEndVisible(true);
    }
  }, []);

  useEffect(() => {
    if (swiperInstance && prevActivePeriodRef.current !== activePeriod) {
      swiperInstance.slideTo(0, 0);
      updateButtonVisibility(swiperInstance);
      prevActivePeriodRef.current = activePeriod;
    }
  }, [swiperInstance, activePeriod, updateButtonVisibility]);

  return (
    <Slider
      events={events}
      swiperParams={swiperParams}
      isMobile={isMobile}
      swiperInstance={swiperInstance}
      setSwiperInstance={setSwiperInstance}
      updateButtonVisibility={updateButtonVisibility}
      isStartVisible={isStartVisible}
      isEndVisible={isEndVisible}
      id={id}
    />
  );
};

export default SliderContainer;
