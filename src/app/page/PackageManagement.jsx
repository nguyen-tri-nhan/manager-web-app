import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import CreatePackageDialog from '../component/dialog/CreatePackageDialog';
import DataTable from '../component/table/DataTable';
import TableColumnDataMapping from '../component/table/TableColumnMapping';
import { ENTITY, PAGE_NAME, SIMPLE_FILTER_OPTIONS, STATUS } from '../util/Constant';
import { next } from '../util/Count';
import { currencyDecorator, idDecorator, statusDecorator ,viewProfile} from '../util/DecoratorConstant';

const PackageManagement = (props) => {

  document.title = PAGE_NAME.PACKAGE_MANAGEMENT;

  const [createPackageDialogOpen, setCreatePackageDialogOpen] = useState(false);

  const handleCloseCreatePackageDialog = () => {
    setCreatePackageDialogOpen(false);
  }

  const handleOpenCreatePackageDialog = () => {
    setCreatePackageDialogOpen(true);
  }

  const renderCreatePackageButton = () => {
    return (
      <Button color='primary' variant="contained" onClick={handleOpenCreatePackageDialog}>
        Thêm gói dịch vụ
      </Button>
    )
  }

  const entity = ENTITY.PACKAGE;

  const columnMapping = [
    new TableColumnDataMapping('ID', 'id', (name, row) => idDecorator(name, row, entity), 'text-center'),
    new TableColumnDataMapping('Tên', 'name'),
    new TableColumnDataMapping('Địa điểm', 'location'),
    new TableColumnDataMapping('Giá dự tính', 'price', (name, row) => currencyDecorator(name, row), 'text-center'),
    new TableColumnDataMapping('Trạng thái', 'status', (name, row) => statusDecorator(name, row, entity)),
    new TableColumnDataMapping('Thông tin', 'profile', (name,row) => viewProfile(name,row,entity),'text-center' ),
  ]


  return (
    <div>
      <Typography variant='h3' align='left'>{PAGE_NAME.PACKAGE_MANAGEMENT}</Typography>
      <DataTable
        key={next()}
        renderButton={renderCreatePackageButton}
        useSearchText
        entity={entity}
        size={5}
        columnMapping={columnMapping} 
        usePagination
        filterOptions={SIMPLE_FILTER_OPTIONS}
        useFilter
      />
      {createPackageDialogOpen && <CreatePackageDialog handleClose={handleCloseCreatePackageDialog} open={createPackageDialogOpen}/>}
    </div>
  );
}

export default PackageManagement;