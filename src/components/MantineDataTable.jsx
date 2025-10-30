import { AgGridReact } from 'ag-grid-react';
import { useMemo, useEffect, useRef } from 'react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { useMantineTheme } from '@mantine/core';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './MantineDataTable.css';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * MantineDataTable - A wrapper component for AG Grid tables with Mantine theme styling
 * This component applies styling to match the Mantine theme and Figma design specifications
 * 
 * Uses CSS variables that Mantine provides automatically, so no runtime style injection needed.
 * 
 * @param {Array} rowData - The data to display in the table
 * @param {Array} columnDefs - Column definitions for the table
 * @param {Object} defaultColDef - Default column definitions
 * @param {Object} gridOptions - Additional AG Grid options
 * @param {Object} style - Custom styles for the grid container
 * @param {string} className - Additional CSS classes
 * @param {string} spacing - 'Standard' (60px rows) or 'Compact' (42px rows)
 */
export function MantineDataTable({
  rowData = [],
  columnDefs = [],
  defaultColDef = {},
  gridOptions = {},
  style,
  className = '',
  spacing = 'Standard', // 'Standard' or 'Compact'
  ...props
}) {
  const theme = useMantineTheme();
  const gridRef = useRef(null);

  // Set CSS custom properties on the grid container to use in CSS
  useEffect(() => {
    if (!gridRef.current) return;

    const root = gridRef.current;
    root.style.setProperty('--ag-header-bg', '#ffffff');
    root.style.setProperty('--ag-border-color', theme.colors.gray[1] || '#e7e7e7');
    root.style.setProperty('--ag-cell-horizontal-padding', theme.spacing.lg || '16px');
    root.style.setProperty('--ag-cell-vertical-padding', '0px');
    root.style.setProperty('--ag-font-family', theme.fontFamily || 'Proxima Nova, sans-serif');
    root.style.setProperty('--ag-header-font-size', theme.fontSizes.xs || '12px');
    root.style.setProperty('--ag-font-size', theme.fontSizes.sm || '14px');
    root.style.setProperty('--ag-header-foreground-color', theme.colors.gray[6] || '#758795');
    root.style.setProperty('--ag-foreground-color', theme.colors.dark[9] || '#141414');
    root.style.setProperty('--ag-background-color', '#ffffff');
    root.style.setProperty('--ag-row-hover-color', theme.colors.purple[0] || '#efefff');
  }, [theme]);

  const defaultColDefMemo = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    ...defaultColDef,
  }), [defaultColDef]);

  const memoizedColumnDefs = useMemo(() => columnDefs, [columnDefs]);
  const memoizedRowData = useMemo(() => rowData, [rowData]);

  const spacingClass = spacing === 'Compact' ? 'compact-spacing' : 'standard-spacing';

  return (
    <div 
      ref={gridRef}
      className={`ag-theme-alpine mantine-ag-grid ${spacingClass} ${className}`}
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
