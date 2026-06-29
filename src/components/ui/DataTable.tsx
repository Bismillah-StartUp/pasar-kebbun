import { cn } from '@/lib/utils';

export interface DataTableColumn<T> {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey: (row: T) => string | number;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T>({
  columns,
  data,
  rowKey,
  emptyMessage = 'Tidak ada data',
  className,
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-border bg-card', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-slate-50/60">
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  'px-5 py-3 text-left text-[11px] font-bold tracking-wider text-slate-400 uppercase',
                  column.className
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-5 py-10 text-center text-sm text-slate-400">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={rowKey(row)} className="border-b border-border last:border-0 hover:bg-slate-50/60 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className={cn('px-5 py-4', column.className)}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
