const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <div className="w-full overflow-x-auto mt-4">
      <table className="min-w-max w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 whitespace-nowrap">
            {columns.map((col) => (
              <th key={col.accessor} className={`p-2 ${col.className || ""}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </div>
  );
};

export default Table;
