import { ColumnBodyOptions, Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export interface IDataTableColumnsParams {
  field?: string;
  sortable_header?: string;
  button?:
    | React.ReactNode
    | ((data: any, options: ColumnBodyOptions) => React.ReactNode);
}

interface IDataTableParams {
  data: Array<any>;
  columnsParams: IDataTableColumnsParams[];
}

const addColumns = (columValues: IDataTableColumnsParams[]) => {
  return columValues.map((columValue) => {
    if (!columValue.field) {
      return <Column body={columValue.button} />;
    } else {
      return (
        <Column
          field={columValue.field}
          sortable
          header={columValue.sortable_header}
        ></Column>
      );
    }
  });
};

const TableData = (props: IDataTableParams) => {
  return (
    <div>
      <DataTable
        value={props.data}
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        dataKey="id"
        paginator
        emptyMessage="No data found."
        className="datatable-responsive"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={10}
      >
        {addColumns(props.columnsParams)}
      </DataTable>
    </div>
  );
};
export default TableData;
