import React, { useState } from "react";
import PaginationControls from "../../Common/Table/PaginationControls/PaginationControls";


export function Table({ data, itemsPerPage, columns, renderRow }) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentTableData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-4 bg-white relative">
      <table>
        <thead>
          <tr className="tableBorder">
            {columns.map((column, index) => (
              <th key={index} className={column.className}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentTableData.map((item, index) => (
            renderRow(item, index)
          ))}
        </tbody>
      </table>

      <div>
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}