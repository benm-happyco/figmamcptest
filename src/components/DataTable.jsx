import { AgGridReact } from 'ag-grid-react';
import { useMemo } from 'react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * DataTable component using AG Grid
 * All data tables in this application should use this component instead of Mantine tables
 * 
 * @param {Array} rowData - The data to display in the table
 * @param {Array} columnDefs - Column definitions for the table
 * @param {Object} defaultColDef - Default column definitions
 * @param {Object} gridOptions - Additional AG Grid options
 * @param {Object} style - Custom styles for the grid container
 * @param {string} className - Additional CSS classes
 */
export function DataTable({
  rowData = [],
  columnDefs = [],
  defaultColDef = {},
  gridOptions = {},
  style,
  className = '',
  ...props
}) {
  const defaultColDefMemo = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    ...defaultColDef,
  }), [defaultColDef]);

  const memoizedColumnDefs = useMemo(() => columnDefs, [columnDefs]);
  const memoizedRowData = useMemo(() => rowData, [rowData]);

  return (
    <div 
      className={`ag-theme-alpine ${className}`}
      style={{ height: '100%', width: '100%', ...style }}
    >
      <AgGridReact
        rowData={memoizedRowData}
        columnDefs={memoizedColumnDefs}
        defaultColDef={defaultColDefMemo}
        theme="legacy"
        animateRows={true}
        pagination={true}
        paginationPageSize={10}
        {...gridOptions}
        {...props}
      />
    </div>
  );
}
