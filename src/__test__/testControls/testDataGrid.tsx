import DataGrid from '../../common/controls/dataGrid/dataGrid';

const TestDataGrid = () => {
  return (
    <div className="col">
      <DataGrid
        height="100vh"
        rows={[
          { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
          { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
          { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
        ]}
        columns={[
          { field: 'make', filter: true, floatingFilter: true },
          { field: 'model', filter: true, floatingFilter: true },
          { field: 'price', filter: true, floatingFilter: true },
          { field: 'electric', filter: true, floatingFilter: true },
        ]}
      />
    </div>
  );
};

export default TestDataGrid;
