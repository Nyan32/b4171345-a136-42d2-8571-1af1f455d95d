'use client';
import React from 'react';
import styles from './SortTableButton.module.css';

interface SortTableButtonProps {
  children: React.ReactNode;
}

const SortTableButton: React.FC<SortTableButtonProps> = ({children}) => {
  return (
    <>
      <button className={`${styles.hovering} ${styles.buttonSort}`}>{children}</button>
    </>
  );
};

export default SortTableButton;
