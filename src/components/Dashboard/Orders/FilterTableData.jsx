import React, { useState } from "react";
import { Calendar, Close } from "../../assets/icons";
import TableBody from "./TableBody";

export default function FilterTableData() {
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const handleStatusSelection = (status) => {
    setSelectedStatus((prevStatus) => {
      if (prevStatus.includes(status)) {
        return prevStatus.filter((s) => s !== status);
      } else {
        return [...prevStatus, status];
      }
    });
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handlePaymentStatusSelection = (paymentStatus) => {
    setSelectedPaymentStatus((prevPaymentStatus) => {
      if (prevPaymentStatus.includes(paymentStatus)) {
        return prevPaymentStatus.filter((ps) => ps !== paymentStatus);
      } else {
        return [...prevPaymentStatus, paymentStatus];
      }
    });
  };

  return (
    <>
      <div className="px-6">
        <div className="flex flex-col gap-3 px-2">
          <div className="pt-4 flex items-center gap-4">
            <div className="flex gap-3 items-center px-4 py-[6px] rounded-[4px] bg-LightGrey">
              <select
                className="flex gap-3 items-center focus:outline-none rounded-[4px] bg-LightGrey"
                value={`Status`}
                onChange={(e) => handleStatusSelection(e.target.value)}
              >
                <option value="Status" disabled>
                  Status
                </option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
                <option value="Refunded">Refunded</option>
              </select>
            </div>

            <div className="flex gap-3 items-center px-4 py-[6px] rounded-[4px] bg-LightGrey">
              <select
                className="flex gap-3 items-center focus:outline-none rounded-[4px] bg-LightGrey"
                value={`Payment Status`}
                onChange={(e) => handlePaymentStatusSelection(e.target.value)}
              >
                <option value="Payment Status" disabled>
                  Payment Status
                </option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Dispatched">Dispatched</option>
                <option value="Ready to collect">Ready to collect</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Returned">Returned</option>
                <option value="Return request">Return request</option>
                <option value="Return request">Return collected</option>
              </select>
            </div>

            <div className="flex  gap-3 items-center px-4 py-[6px] rounded-[4px] bg-LightGrey">
              <div className="text-xs leading-[16px]">Date</div>
              {/* <img src={Calendar} alt="Calendar" /> */}
              <input
                className=" bg-LightGrey focus:outline-none text-xs leading-[16px] "
                type="date"
                value={selectedDate}
                onChange={(e) => handleDateSelection(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pb-2">
            {selectedStatus.map((status) => (
              <div
                key={status}
                className="flex items-center border border-Tertiary rounded-[4px] py-[6px] pl-3 pr-2"
              >
                <span className="text-xs leading-[16px]">{status}</span>
                <img
                  src={Close}
                  alt="Close"
                  onClick={() => handleStatusSelection(status)}
                />
              </div>
            ))}

            {selectedPaymentStatus.map((paymentStatus) => (
              <div
                key={paymentStatus}
                className="flex items-center border border-Tertiary rounded-[4px] py-[6px] pl-3 pr-2"
              >
                <span className="text-xs leading-[16px]">{paymentStatus}</span>
                <img
                  src={Close}
                  alt="Close"
                  onClick={() => handlePaymentStatusSelection(paymentStatus)}
                />
              </div>
            ))}

            {selectedDate && (
              <div className="flex items-center border border-Tertiary rounded-[4px] py-[6px] pl-3 pr-2">
                <span className="text-xs leading-[16px]">{selectedDate}</span>
                <img
                  src={Close}
                  alt="Close"
                  onClick={() => setSelectedDate("")}
                />
              </div>
            )}

            {selectedStatus.length > 0 ||
            selectedPaymentStatus.length > 0 ||
            selectedDate ? (
              <div>
                <span
                  className="text-xs cursor-pointer leading-[16px] text-BlueColor"
                  onClick={() => {
                    setSelectedStatus([]);
                    setSelectedPaymentStatus([]);
                    setSelectedDate("");
                  }}
                >
                  Clear all
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <TableBody
        selectedStatus={selectedStatus}
        selectedPaymentStatus={selectedPaymentStatus}
        selectedDate={selectedDate}
      />
    </>
  );
}
