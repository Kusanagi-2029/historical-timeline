import ImgSrc from '../../shared/png/Kapy.png';

import React from 'react';

import { useNavigate } from 'react-router-dom';
import NavButton from 'shared/_ui_/NavButtons/NavButton/NavButton';

import styles from './error.module.scss';

const Error503 = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className={styles.error}>
      <div className={styles.errorHeader}>
        <h1>Ошибка 503</h1>
        {/* При её наличии: */}
        <h2>Требуется сетевая аутентификация</h2>
      </div>
      <div className={styles.errorContainer}>
        <img className={styles.errorLogo} src={ImgSrc} alt="Капибара" />
      </div>
      <NavButton text="На Главную" isErrorPage={true} onClick={() => handleNavigate('/')} />
    </div>
  );
};

export default Error503;
