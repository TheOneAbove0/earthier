import { Table } from "../../Common/Table/Table";
import { TableData, columns, renderRow } from "./TableData";

export default function TableBody({
  selectedStatus,
  selectedPaymentStatus,
  selectedDate,
}) {
  const data = TableData;

  const filteredData = data.filter((item) => {
    const statusFilter =
      selectedStatus.length === 0 ||
      selectedStatus.includes(item.PaymentStatus);
    const paymentStatusFilter =
      selectedPaymentStatus.length === 0 ||
      selectedPaymentStatus.includes(item.Status);
    const dateFilter = selectedDate === "" || selectedDate === item.CreatedAT;

    return statusFilter && paymentStatusFilter && dateFilter;
  });

  const itemsPerPage = 12;

  return (
    <Table
      data={filteredData}
      itemsPerPage={itemsPerPage}
      columns={columns}
      renderRow={renderRow}
    />
  );
}
