import React from 'react';
import { H1 } from '@awesomecomponents/mux/core/typography';
import { Progress, Icon } from '@awesomecomponents/mux/core/components';

import { getAllEmployees } from '../services/apiService';
import EmployeeItem from './EmployeeItem';
import useAsync from '../hooks/useAsync';

function EmployeesPage() {
  const asyncFunction = getAllEmployees;
  const { pending, value, error } = useAsync(asyncFunction, true);

  const renderEmployees = () => {
    if (pending) {
      return <Progress />;
    }
    if (error) {
      console.log(error);
      return (
        <Icon manulifeName="sad" color="#1E212F" fill="#8E90A2" secondaryColor="#FF7769" height="10em" width="10em" />
      );
    }
    return value.map((employee) => <EmployeeItem key={employee.id} employee={employee} />);
  };

  return (
    <div>
      <H1>Here's the list of employees...</H1>
      {renderEmployees()}
    </div>
  );
}

export default EmployeesPage;
