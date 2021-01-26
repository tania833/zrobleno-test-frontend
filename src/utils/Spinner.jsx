import React from 'react';
import styles from '../styles/Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={`${styles.spinner} ${styles.bar}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
