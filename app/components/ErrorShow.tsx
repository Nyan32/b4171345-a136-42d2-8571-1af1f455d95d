'use client';
import React from 'react';
import styles from './ErrorShow.module.css';

interface ErrorShownProps {
    children: React.ReactNode;
}

const ErrorShow: React.FC<ErrorShownProps> = ({children}) => {
  return (
    <div className={`${styles.errorCont}`}>{children}</div>
  )
}

export default ErrorShow