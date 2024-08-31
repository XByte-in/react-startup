/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useCallback, useEffect, useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.min.css';

import './dataGrid.scss';

export interface IColumnSchema {
  field: string;
  headerName?: string;
  checkboxSelection?: boolean;
  headerCheckboxSelection?: boolean;

  sortable?: boolean;
  filter?: boolean;
  floatingFilter?: boolean;
}

export interface IDataGridParams {
  rows: Array<object>;
  columns: Array<IColumnSchema>;
  height: number | string;
  loading?: boolean;
  supressRowClickSelection?: boolean;
  rowSelection?: 'single' | 'multiple';
  onRowDoubleClicked?: (event: any) => void;
  onGridReady?: (event: any) => void;
  onSelectionChanged?: (event: any) => void;
}

const DataGrid = (props: IDataGridParams) => {
  // const [gridApi, setGridApi] = useState(null);
  const [colDefs, setColDefs] = useState<ColDef[]>([]);
  useEffect(() => {
    const columns = props.columns.map((column: IColumnSchema) => {
      return {
        headerName: column.headerName,
        checkboxSelection: column.checkboxSelection,
        headerCheckboxSelection: column.headerCheckboxSelection,
        field: column.field,
        sortable: column.sortable,
        filter: column.filter,
        floatingFilter: column.floatingFilter,
      };
    });
    setColDefs(columns);
  }, [props.columns, props.rows]);

  const onGridReady = useCallback((params: any) => {
    // setGridApi(params.api);
    if (props.onGridReady) {
      props.onGridReady(params.api);
    }
  }, []);

  return (
    <div
      className="dataGrid ag-theme-alpine" // applying the Data Grid theme
      style={{ height: props.height }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowSelection={props.rowSelection}
        suppressRowClickSelection={props.supressRowClickSelection}
        rowData={props.rows}
        columnDefs={colDefs}
        loading={props.loading}
        onRowDoubleClicked={props.onRowDoubleClicked}
        onSelectionChanged={props.onSelectionChanged}
        onGridReady={onGridReady}
      />
    </div>
  );
};
export default DataGrid;
