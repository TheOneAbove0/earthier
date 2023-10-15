import { Table } from "../../Common/Table/Table";
import { ThreeDot } from "../../assets/icons";
import { TableData } from "./TableData";


const statusColors = {
    Pending: 'bg-Warning text-white',
    Processing: 'bg-LightBlue text-white',
    Dispatched: 'bg-BlueColor text-white',
    'Ready to collect': 'bg-LGrey text-black',
    Delivered: 'bg-LGreen text-white',
    Cancelled: 'bg-Tertiary text-white',
    'Return request': 'bg-AdminPanel text-black',
    'Return collected': 'bg-AdminPanel text-black',
    Returned: 'bg-Danger text-white',
    'Dropped Back': 'bg-Black text-white',
  };

  const PaymentColors = {
    Paid: 'bg-LGreen bg-opacity-10 text-LGreen',
    Unpaid: 'bg-LGrey bg-opacity-10 text-Black',
    Refunded: 'bg-Danger bg-opacity-10 text-Danger',
  
  };

export default function TableBody() {
  const itemsPerPage = 12;

  const columns = [
    {
      header: <input className="w-4 h-4 rounded-[4px]" type="checkbox" />,
      className: "px-3 whitespace-nowrap pt-4 pb-2 w-[64px]",
    },
    {
      header: "#",
      className:
        "pl-2 text-start text-xs font-medium  leading-[16px] whitespace-nowrap pt-4 pb-2 w-[64px]",
    },
    {
      header: "Customer Name",
      className:
        "pl-4 text-start text-xs font-medium leading-[16px] whitespace-nowrap pt-4 pb-2 w-[40%]",
    },
    {
      header: "Quantity",
      className:
        "pl-2 text-start text-xs font-medium leading-[16px] whitespace-nowrap pt-4 pb-2 w-[80px]",
    },
    {
      header: "Payment mode",
      className:
        "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[120px]",
    },
    {
        header: "Payment Status",
        className:
          "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[106px]",
      },
    {
      header: "Status",
      className:
        "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[160px]",
    },
    {
      header: "Delivery person",
      className:
        "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[160px]",
    },
    {
      header: "Created at",
      className:
        "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[160px]",
    },
    {
      header: "Action",
      className:
        "pl-[11px] text-xs font-medium leading-[16px] text-start pt-4 pr-2 whitespace-nowrap pb-2 w-[56px]",
    },
  ];

  const renderRow = (item, index) => (
    <tr key={index}>
      <td className="px-6 whitespace-nowrap pt-4 pb-2 w-[64px]">
        <input className="w-4 h-4 rounded-[4px]" type="checkbox" />
      </td>

      <td className="pl-2 whitespace-nowrap pt-2 pb-2 w-[64px]">
        <div className="font-medium text-xs leading-[16px] text-start ">
          {item.id}
        </div>
      </td>

      <td className="pl-4 whitespace-nowrap  py-2 w-[40%]">
          <span className=" text-[13px] leading-[18px] tracking-[-0.08px] ">
            {item.CustomerName}
          </span>
       
      </td>

      <td className="p-3 whitespace-nowrap w-[80px]">
        <div className="text-xs leading-[16px]">{item.Quantity}</div>
      </td>
      <td className="py-3 whitespace-nowrap pl-2 w-[120px]">
        <div className="text-xs leading-[16px]">{item.PaymentMode}</div>
      </td>
      <td className={`py-3 whitespace-nowrap pl-2 w-[106px]`}>
        <div className={`text-xs w-fit rounded-[3px] px-2 leading-[16px] ${PaymentColors[item.PaymentStatus] || ''} `}>{item.PaymentStatus}</div>
      </td>
      <td className={`py-3 whitespace-nowrap pl-2 w-[160px] `}>
        <div className={`text-xs px-2 w-fit rounded-[3px] leading-[16px] ${statusColors[item.Status] || ''}`}>{item.Status}</div>
      </td>
      <td className="py-3 whitespace-nowrap pl-2 w-[160px]">
        <div className="text-xs  leading-[16px]">{item.DeliveryPerson}</div>
      </td>
      <td className="py-3 whitespace-nowrap pl-2 w-[160px]">
        <div className="text-xs leading-[16px]">{item.CreatedAT}</div>
      </td>
      

      <td className="pl-[28px] py-[10px]  whitespace-nowrap w-[56px]">
        <div className="font-medium text-xs leading-[16px] text-start">
          <img src={ThreeDot} alt="ThreeDot" />
        </div>
      </td>
    </tr>
  );

  const data = TableData;

  return (
    <Table
      data={data}
      itemsPerPage={itemsPerPage}
      columns={columns}
      renderRow={renderRow}
    />
  );
}
