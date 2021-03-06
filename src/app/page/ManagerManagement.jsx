import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import CreateManagerDialog from '../component/dialog/CreateManagerDialog';
import UserStatusBar from '../component/UserStatusBar';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME, SIMPLE_FILTER_OPTIONS, STATUS } from '../util/Constant';
import { next } from '../util/Count';
import { idDecorator, mailDecorator, statusDecorator,viewProfile } from '../util/DecoratorConstant';

const ManagerManagement = (props) => {

  document.title = PAGE_NAME.HR_MANAGEMENT;

  const [createManagerDialogOpen, setCreateManagerDialogOpen] = useState(false);
  const entity = ENTITY.MANAGER;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Họ', 'firstname'),
    new TableColumnDataMapping('Tên', 'lastname'),
    new TableColumnDataMapping('Email', 'email', mailDecorator),
    new TableColumnDataMapping('Số điện thoại', 'phoneNumber'),
    new TableColumnDataMapping('Địa chỉ', 'address'),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
    new TableColumnDataMapping('Thông tin', 'profile', (name,row) => viewProfile(name,row,entity),'text-center' ),
  ]

  const renderAddManagerButton = () => {
    return (
      <Button color='primary' variant="contained" onClick={handleOpenCreateManagerDialog}>
        Thêm quản lý
      </Button>
    )
  }

  const handleCloseCreateManagerDialog = () => {
    setCreateManagerDialogOpen(false);
  }

  const handleOpenCreateManagerDialog = () => {
    setCreateManagerDialogOpen(true);
  }

  return (
    <div className="content-layout">
      <Typography variant='h3' align='left'>
        {PAGE_NAME.MANAGER}
      </Typography>
      <div className="mb-2">
        <UserStatusBar entity={entity}/>
      </div>
      <DataTable
        key={next()}
        renderButton={renderAddManagerButton}
        useSearchText
        entity={entity}
        size={5}
        columnMapping={columnMapping}
        usePagination
        useFilter
        filterOptions={SIMPLE_FILTER_OPTIONS}
      />
      {createManagerDialogOpen && <CreateManagerDialog handleClose={handleCloseCreateManagerDialog} open={createManagerDialogOpen} />}
    </div>
  );
}

export default ManagerManagement;