import React from 'react';
import { H1, H4 } from '@awesomecomponents/mux/core/typography';
import { Button } from '@awesomecomponents/mux/core/components';

import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  return (
    <div>
      <H1>Welcome to MU AKS Portal!</H1>
      <H4>When your API is ready, click the following button to load employee details.</H4>
      <Button onClick={() => history.push('/employees')}>Load Employees</Button>
    </div>
  );
}

export default HomePage;
