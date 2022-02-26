import React from 'react';
import TableCore from './TableCore';
import DataLoader from './DataLoader';

const DataTable = ({entity, size, additionalParams, ...props}) => {

  const renderData = (data) => {
    return (
      <TableCore data={data} {...props} />
    );
  }

  return (
  <DataLoader 
    renderData={renderData}
    entity={entity} 
    size={size} 
    additionalParams={additionalParams} 
    {...props} 
    />
  );
}

export default DataTable;