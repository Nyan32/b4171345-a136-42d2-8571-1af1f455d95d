'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './CreateButton.module.css';
import { TableDataContext } from './TableDataProvider';

interface Row {
  id: number;
  firstName: string;
  lastName: string;
  positionName: string;
  phone: string;
  email: string;
}

const CreateButton = () => {
  const context = useContext(TableDataContext);

  if (!context) {
    return <div>Error: Context not provided.</div>;
  }

  const { rows, setRows, addState, setAddState } = context;

  const handleAddRowBtn = () => {

    if (addState == false) {
      const newRow: Row = {
        id: 0,
        firstName: '',
        lastName: '',
        positionName: '',
        phone: '',
        email: '',
      };
      setRows((rows) => { return [newRow, ...rows] });
      setAddState ((addState) => { return true })
    }
  }

  return (
    <>
      <button onClick={handleAddRowBtn} className={`${styles.hovering}`}><Image src={'/images/icons8-add-24.png'} width={24} height={24} alt='add'></Image></button>
    </>
  );
};

export default CreateButton;
