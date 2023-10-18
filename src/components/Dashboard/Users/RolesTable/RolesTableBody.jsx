import { Table } from "../../../Common/Table/Table";
import { RolesTableData, columns, renderRow } from "./RolesTableData";

export default function RolesTableBody() {
  const data = RolesTableData;

  const itemsPerPage = 5;

  return (
    <Table
      data={data}
      itemsPerPage={itemsPerPage}
      columns={columns}
      renderRow={renderRow}
    />
  );
}
