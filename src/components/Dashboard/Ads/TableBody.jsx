import { Table } from "../../Common/Table/Table";
import { TableData, columns, renderRow } from "./TableData";

export default function TableBody() {
  const data = TableData;



  const itemsPerPage = 3;

  return (
    <Table
      data={data}
      itemsPerPage={itemsPerPage}
      columns={columns}
      renderRow={renderRow}
    />
  );
}
