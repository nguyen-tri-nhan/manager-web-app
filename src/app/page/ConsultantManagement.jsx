import React from 'react';
import { PAGE_NAME } from '../util/Constant';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import DataTable from '../component/table/DataTable';
import { Typography } from '@material-ui/core';


const Consultant = (props) => {

  document.title = PAGE_NAME.HR_MANAGEMENT;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id'),
    new TableColumnDataMapping('Họ', 'firstname'),
    new TableColumnDataMapping('Tên', 'lastname'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Email', 'email'),
    new TableColumnDataMapping('Giới tính', 'gender'),
    new TableColumnDataMapping('Trạng thái', 'status'),
  ]

  const additionalParams = {
    showroomId: '',
  }

  return (
    <div>
      <Typography variant='h3' align='left'>
        {PAGE_NAME.CONSULTANT}
      </Typography>
      <DataTable useSearchText entity="consultant" additionalParams={additionalParams} size={5} columnMapping={columnMapping} />
    </div>
  );
}

export default Consultant;