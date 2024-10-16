import React from 'react'
import EmpTable from './components/empTable/emp'

import EmpNavbar from './components/Navbar/Navbar';
import { EmployeeTable } from './components/Table/EmployeeTable';

function App () {


  return(
        <div>
          <EmpNavbar />
               <EmployeeTable />
        </div>
  );
}

export default App;