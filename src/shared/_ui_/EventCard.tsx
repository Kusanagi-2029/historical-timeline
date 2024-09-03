import { EventCardProps } from './_types_/sharedUI.types';

import React from 'react';

/**
 * Компонент отображения карточки в слайдере
 */
const EventCard: React.FC<EventCardProps> = ({ date, description, styles }) => {
  return (
    <div className={styles.eventCard}>
      <p className={styles.eventDate}>{date}</p>
      <p className={styles.eventDescription}>{description}</p>
    </div>
  );
};

export default EventCard;
