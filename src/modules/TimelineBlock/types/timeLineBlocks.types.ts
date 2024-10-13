import React from 'react';

import SwiperType from 'swiper';
import { SwiperProps } from 'swiper/react';

export interface Event {
  date: string;
  description: string;
}

export interface TimelinePeriod {
  theme: string;
  events: Event[];
  startDate?: string;
  endDate?: string;
}

export interface DateSelectorContainerProps {
  activePeriod: number;
  periods: number;
  onChange: (newPeriod: number) => void;
}

export interface DateSelectorPresenterProps {
  activePeriod: number;
  periods: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  isMobile: boolean;
}

export interface SliderContainerProps {
  events: { date: string; description: string }[];
  activePeriod: number;
  id: string;
}

export interface SliderPresenterProps {
  events: { date: string; description: string }[];
  swiperParams: SwiperProps;
  isMobile: boolean;
  swiperInstance: SwiperType | null;
  setSwiperInstance: (swiper: SwiperType | null) => void;
  updateButtonVisibility: (swiper: SwiperType) => void;
  isStartVisible: boolean;
  isEndVisible: boolean;
  id: string;
}

export interface TimelineDotsProps {
  totalPeriods: number;
  activePeriod: number;
  hoveredIndex: number | null;
  onPeriodChange: (period: number) => void;
  circleRefs: React.RefObject<(SVGCircleElement | null)[]>;
  textRefs: React.RefObject<(SVGTextElement | null)[]>;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: (index: number) => void;
  isMobile: boolean;
}

export interface DateDisplayTimelineProps {
  startDate: string;
  endDate: string;
  isMobile: boolean;
  classNameContainerDesktop: string;
  classNameContainerMobile: string;
  classNameStartDateDesktop: string;
  classNameStartDateMobile: string;
  classNameEndDate: string;
  classNameEndDateMobile: string;
}

export interface TimelinePeriod {
  theme: string;
  events: { date: string; description: string }[];
}

export interface TimelineContainerProps {
  activePeriod: number;
  timelineData: TimelinePeriod[];
  onPeriodChange: (period: number) => void;
}

export interface TimelinePresenterProps {
  periodData: {
    theme: string;
    events: { date: string; description: string }[];
  };
  startDate: string;
  endDate: string;
  isMobile: boolean;
  circleRef: React.RefObject<SVGSVGElement>;
  children: React.ReactNode; // Для отображения TimelineDots
}

export interface TimelineBlockProps {
  id: string;
}
