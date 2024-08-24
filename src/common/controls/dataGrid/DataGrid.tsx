import { ColDef } from 'ag-grid-community'; // Import the ColDef type definition
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-alpine.min.css'; // Optional Theme applied to the Data Grid
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { useEffect, useState } from 'react';
import './dataGrid.scss';

export interface IColumnSchema {
  field: string;
  headerName?: string;

  sortable?: boolean;
  filter?: boolean;
  floatingFilter?: boolean;
}

export interface IDataGridParams {
  rows: Array<object>;
  columns: Array<IColumnSchema>;
  height: number | string;
  loading?: boolean;
}

const DataGrid = (props: IDataGridParams) => {
  const [colDefs, setColDefs] = useState<ColDef[]>([]);
  useEffect(() => {
    const columns = props.columns.map((column: IColumnSchema) => {
      return {
        headerName: column.headerName,
        field: column.field,
        sortable: column.sortable,
        filter: column.filter,
        floatingFilter: column.floatingFilter,
      };
    });
    setColDefs(columns);
  }, [props.columns, props.rows]);

  return (
    <div
      className="dataGrid ag-theme-alpine" // applying the Data Grid theme
      style={{ height: props.height }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={props.rows}
        columnDefs={colDefs}
        loading={props.loading}
      />
    </div>
  );
};
export default DataGrid;
