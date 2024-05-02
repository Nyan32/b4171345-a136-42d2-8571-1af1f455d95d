'use client';
import React, { createContext, useState, ReactNode, FC, useEffect } from 'react';

interface Row {
    id: number;
    firstName: string;
    lastName: string;
    positionName: string;
    phone: string;
    email: string;
}

interface TableDataContextValue {
  rows: Row[];
  addState: Boolean;
  setRows: React.Dispatch<React.SetStateAction<Row[]>>;
  setAddState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TableDataContext = createContext<TableDataContextValue | null>(null);

const mockData: Row[] = [];

export const TableDataProvider: FC<{ children: ReactNode, dataInit: Row[] }> = ({ children, dataInit }) => {
  const [rows, setRows] = useState<Row[]>(dataInit);
  const [addState, setAddState] = useState(false);

  return (
    <TableDataContext.Provider value={{ rows, setRows, addState, setAddState }}>
      {children}
    </TableDataContext.Provider>
  );
};
