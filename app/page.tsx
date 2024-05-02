import { Suspense } from 'react';
import TableData from "./components/TableData";
import CreateButton from "./components/CreateButton";
import { TableDataProvider } from "./components/TableDataProvider";

interface Row {
  id: number;
  firstName: string;
  lastName: string;
  positionName: string;
  phone: string;
  email: string;
}

async function fetchData(): Promise<Row[]> {
  const endpointUrl = 'http://localhost/read_employee.php';
  const response = await fetch(endpointUrl, {cache: 'no-store'});

  if (!response.ok) {
      throw new Error('Failed to fetch data');
  }

  const data: Row[] = await response.json();
  return data;
}

export default async function Home() {
  const dataEmployee = await fetchData();

  return (
    <main>
      <h1 className="title">Employee Management App</h1>
      <TableDataProvider dataInit={dataEmployee}>
        <div className="tableContainer">
          <div className="menuContainer">
            <div className="buttonSpace">
                <CreateButton></CreateButton>
            </div>
            <div className="buttonSpace">
              
            </div>
            <div className="buttonSpace">
      
            </div>
          </div>
            <TableData></TableData>
        </div>
      </TableDataProvider>
    </main>
  );
}

