interface ResultTableProps {
  title:string;
  sql:string;
  parameters: readonly unknown[];
  rows: object[];
}

function showValue(value: unknown) : string {
  if(value === null) {
    return "null";
  }
  return String(value);
}

export default function ResultTable({title, sql, parameters, rows }:ResultTableProps) {

  let columns: string [] = [];

  if (rows.length>0){
    columns = Object.keys(rows[0]);
  }

  return (
    <section>
      <h2 className="mb-2 text-lg font-bold">{title}</h2>
      <pre className="mb-1 whitespace-pre-wrap rounded bg-gray-900 p-3 text-sm text-green-300">{sql}</pre>
      <p className="mb-2 text-sm text-gray-600">파라미터: {JSON.stringify(parameters)}</p>
      <p className="mb-2 text-sm text-gray-600">결과:{rows.length}</p>

      <table className="w-full border-collapse text-sm">
        {/* 해더영역 */}
        <thead>
          {
            columns.map(
              (column) => (
                <th key={column} className="border bg-gray-100 px-2 py-1 text-left">{column}</th>
              )
            )
          }

        </thead>

        {/* 데이터영역 */}
        {
          rows.map(
            (row, index)=>(
              <tr key={index}>
                {
                  columns.map(
                    (column)=>(
                      <td key={column} className="border px-2 py-1">
                        {showValue( (row as Record<string, unknown>)[column] )}
                      </td>
                    )  
                  )
                }
              </tr>
            )
          )

        }
      </table>



    </section>



  );

}