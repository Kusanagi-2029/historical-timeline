import { ArrowButtonProps } from './_types_/sharedUI.types';

import React from 'react';

/**
 * Компонент кнопки пагинации/слайдера с иконкой
 */
const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick, disabled, Icon, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      <Icon />
    </button>
  );
};

export default ArrowButton;
