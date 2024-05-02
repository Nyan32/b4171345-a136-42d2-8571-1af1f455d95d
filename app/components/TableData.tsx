'use client';
import React, { useContext, useEffect, useState } from 'react';
import SortTableButton from "./SortTableButton";
import ErrorShow from "./ErrorShow";
import { TableDataContext } from './TableDataProvider';
import styles from './TableData.module.css';

interface Row {
  id: number;
  firstName: string;
  lastName: string;
  positionName: string;
  phone: string;
  email: string;
}

interface RowError {
  firstNameErr: React.ReactNode;
  lastNameErr: React.ReactNode;
  positionNameErr: React.ReactNode;
  phoneErr: React.ReactNode;
  emailErr: React.ReactNode;
}

interface emailValidation{
  jumlah: number
}

const TableData = () => {
  const context = useContext(TableDataContext);

  if (!context) {
    return <div>Error: Context not provided.</div>;
  }

  const { rows, setRows, addState, setAddState } = context;

  const initialRowErrors: RowError[] = rows.map(() => ({
    firstNameErr: null,
    lastNameErr: null,
    positionNameErr: null,
    phoneErr: null,
    emailErr: null,
  }));
  const [errorCont, setErrorCont] = useState<RowError[]>(initialRowErrors);

  async function fetchValidationEmail(emailInput: string): Promise<emailValidation> {
    const formData = new FormData();
    formData.append('email', emailInput);

    const endpointUrl = 'http://localhost/validate_email.php';
    const requestOptions = {
      method: 'POST',
      body: formData
    };

    const response = await fetch(endpointUrl, requestOptions);
  
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
  
    const data: emailValidation = await response.json();
    return data;
  }

  const handleInputChange = (id: number, field: keyof Row, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setRows((prevRows) => {

        const index = prevRows.findIndex((row) => row.id === id);
        if (index === -1) {
            return prevRows;
        }

        const updatedRows = [...prevRows];
        updatedRows[index] = {
            ...updatedRows[index],
            [field]: value,
        };
        return updatedRows;
    });
  };

  const handleValidationInputFirstName = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const errors = [...errorCont];
      const rowIndex = rows.findIndex((row) => row.id === id);
      
      if (rowIndex !== -1) {
          const updatedRowError = { ...errors[rowIndex] };
          const updatedRows = [...rows];

          if (!(updatedRows[rowIndex].lastName == '' &&
            updatedRows[rowIndex].positionName == '' &&
            updatedRows[rowIndex].phone == '' &&
            updatedRows[rowIndex].email == '' 
          )) {
            if (value.trim() === '') {
                updatedRowError.firstNameErr = <ErrorShow>First name is required</ErrorShow>;
            } else {
                updatedRowError.firstNameErr = null;
            }
          } else {
            updatedRowError.firstNameErr = null;
            updatedRowError.lastNameErr = null;
            updatedRowError.positionNameErr = null;
            updatedRowError.phoneErr = null;
            updatedRowError.emailErr = null;
          }

          errors[rowIndex] = updatedRowError;
          setErrorCont(errors);
      }
  };

  const handleValidationInputLastName = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const errors = [...errorCont];
    const rowIndex = rows.findIndex((row) => row.id === id);
    
    if (rowIndex !== -1) {
        const updatedRowError = { ...errors[rowIndex] };
        const updatedRows = [...rows];

        if (!(updatedRows[rowIndex].firstName == '' &&
          updatedRows[rowIndex].positionName == '' &&
          updatedRows[rowIndex].phone == '' &&
          updatedRows[rowIndex].email == '' 
        )) {
          if (value.trim() === '') {
              updatedRowError.lastNameErr = <ErrorShow>Last name is required</ErrorShow>;
          } else {
              updatedRowError.lastNameErr = null;
          }
        } else {
            updatedRowError.firstNameErr = null;
            updatedRowError.lastNameErr = null;
            updatedRowError.positionNameErr = null;
            updatedRowError.phoneErr = null;
            updatedRowError.emailErr = null;
        }

        errors[rowIndex] = updatedRowError;
        setErrorCont(errors);
    }
  };

  const handleValidationInputPositionName = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const errors = [...errorCont];
    const rowIndex = rows.findIndex((row) => row.id === id);
    
    if (rowIndex !== -1) {
        const updatedRowError = { ...errors[rowIndex] };
        const updatedRows = [...rows];

        if (!(updatedRows[rowIndex].firstName == '' &&
          updatedRows[rowIndex].lastName == '' &&
          updatedRows[rowIndex].phone == '' &&
          updatedRows[rowIndex].email == '' 
        )) {
          if (value.trim() === '') {
              updatedRowError.positionNameErr = <ErrorShow>Position name is required</ErrorShow>;
          } else {
              updatedRowError.positionNameErr = null;
          }
        } else {
            updatedRowError.firstNameErr = null;
            updatedRowError.lastNameErr = null;
            updatedRowError.positionNameErr = null;
            updatedRowError.phoneErr = null;
            updatedRowError.emailErr = null;
        }

        errors[rowIndex] = updatedRowError;
        setErrorCont(errors);
    }
  };

  const handleValidationInputPhone = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const errors = [...errorCont];
    const rowIndex = rows.findIndex((row) => row.id === id);
    
    if (rowIndex !== -1) {
        const updatedRowError = { ...errors[rowIndex] };
        const updatedRows = [...rows];

        if (!(updatedRows[rowIndex].firstName == '' &&
          updatedRows[rowIndex].lastName == '' &&
          updatedRows[rowIndex].positionName == '' &&
          updatedRows[rowIndex].email == '' 
        )) {
          if (value.trim() === '') {
              updatedRowError.phoneErr = <ErrorShow>Phone is required</ErrorShow>;
          } else {
              updatedRowError.phoneErr = null;
          }
        } else {
            updatedRowError.firstNameErr = null;
            updatedRowError.lastNameErr = null;
            updatedRowError.positionNameErr = null;
            updatedRowError.phoneErr = null;
            updatedRowError.emailErr = null;
        }

        errors[rowIndex] = updatedRowError;
        setErrorCont(errors);
    }
  };

  const handleValidationInputEmail = async (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const errors = [...errorCont];
    const rowIndex = rows.findIndex((row) => row.id === id);
    
    if (rowIndex !== -1) {
        const updatedRowError = { ...errors[rowIndex] };
        const updatedRows = [...rows];

        if (!(updatedRows[rowIndex].firstName == '' &&
          updatedRows[rowIndex].lastName == '' &&
          updatedRows[rowIndex].positionName == '' &&
          updatedRows[rowIndex].phone == '' 
        )) {
          if (value.trim() === '') {
              updatedRowError.emailErr = <ErrorShow>Email is required</ErrorShow>;
          } else {
              const emailValidation = await fetchValidationEmail(value);
              console.log(emailValidation.jumlah);
              if (emailValidation.jumlah > 0) {
                updatedRowError.emailErr = <ErrorShow>Email is already registered</ErrorShow>;
              } else {
                updatedRowError.emailErr = null;
              }
              
          }
        } else {
            updatedRowError.firstNameErr = null;
            updatedRowError.lastNameErr = null;
            updatedRowError.positionNameErr = null;
            updatedRowError.phoneErr = null;
            updatedRowError.emailErr = null;
        }

        errors[rowIndex] = updatedRowError;
        setErrorCont(errors);
    }
  };

  return (
      <table className={`${styles.table}`}>
        <thead className={`${styles.thead}`}>
          <tr>
            <th><SortTableButton>First Name</SortTableButton></th>
            <th><SortTableButton>Last Name</SortTableButton></th>
            <th><SortTableButton>Position Name</SortTableButton></th>
            <th><SortTableButton>Phone</SortTableButton></th>
            <th><SortTableButton>Email</SortTableButton></th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row, index) => (
            <tr className={`${styles.tbodyTr}`} key={row.id}>
              <td className={`${styles.tbodyTd}`}>{errorCont[index]?.firstNameErr}<input className={`${styles.inputText}`} onBlur={(event) => handleValidationInputFirstName(row.id, event)} onChange={(event) => handleInputChange(row.id, 'firstName', event)} type="text" name="firstName[]" value={row.firstName} /></td>
              <td className={`${styles.tbodyTd}`}>{errorCont[index]?.lastNameErr}<input className={`${styles.inputText}`} onBlur={(event) => {handleValidationInputLastName(row.id, event)}} onChange={(event) => handleInputChange(row.id, 'lastName', event)} type="text" name="lastName[]" value={row.lastName} /></td>
              <td className={`${styles.tbodyTd}`}>{errorCont[index]?.positionNameErr}<input className={`${styles.inputText}`} onBlur={(event) => {handleValidationInputPositionName(row.id, event)}} onChange={(event) => handleInputChange(row.id, 'positionName', event)} type="text" name="positionName[]" value={row.positionName} /></td>
              <td className={`${styles.tbodyTd}`}>{errorCont[index]?.phoneErr}<input className={`${styles.inputText}`} onBlur={(event) => {handleValidationInputPhone(row.id, event)}} onChange={(event) => handleInputChange(row.id, 'phone', event)} type="text" name="phone[]" value={row.phone} /></td>
              <td className={`${styles.tbodyTd}`}>{errorCont[index]?.emailErr}<input className={`${styles.inputText}`} onBlur={(event) => {handleValidationInputEmail(row.id, event)}} onChange={(event) => handleInputChange(row.id, 'email', event)} type="text" name="email[]" value={row.email} /></td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default TableData;
