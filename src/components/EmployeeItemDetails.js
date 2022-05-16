import React from 'react';
import { P } from '@awesomecomponents/mux/core/typography';

function EmployeeItemDetails({ dob, title }) {
  return (
    <>
      <P>DOB: {dob}</P>
      <P>Title: {title}</P>
    </>
  );
}

export default EmployeeItemDetails;
