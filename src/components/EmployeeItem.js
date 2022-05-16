import React, { useCallback } from 'react';
import { Progress, ExpandablePanel, Icon } from '@awesomecomponents/mux/core/components';

import { getDetailsById } from '../services/apiService';
import EmployeeItemDetails from './EmployeeItemDetails';
import useAsync from '../hooks/useAsync';

function EmployeeItem({ employee }) {
  const asyncFunction = useCallback(() => getDetailsById(employee.id), [employee.id]);
  const { execute, pending, value, error } = useAsync(asyncFunction, false);

  const handleToggle = (isCollapsed) => {
    if (!isCollapsed) {
      execute();
    }
  };

  const renderExpandableContent = () => {
    if (pending) {
      return <Progress isFloating={false} />;
    }
    if (error) {
      return <Icon manulifeName="sad" color="#1E212F" fill="#8E90A2" secondaryColor="#FF7769" />;
    }
    if (value) {
      return <EmployeeItemDetails dob={value.dob} title={value.title} />;
    }
    return <></>;
  };

  return (
    <ExpandablePanel title={employee.name} onToggle={handleToggle}>
      {renderExpandableContent()}
    </ExpandablePanel>
  );
}

export default EmployeeItem;
