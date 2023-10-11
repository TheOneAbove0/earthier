import { Table } from "../../Common/Table/Table";
import { ThreeDot } from "../../assets/icons/index";
import {Avatar } from "../../assets/image/index";
import {TableData} from './TableData';

export default function TableBody() {
  const itemsPerPage = 10;

 
  const columns = [
    {
      header: <input className="w-4 h-4 rounded-[4px]" type="checkbox" />,
      className: "px-3 whitespace-nowrap pt-4 pb-2 w-[64px]",
    },
    {
      header: "#",
      className: "pl-2 text-start whitespace-nowrap pt-4 pb-2 w-[64px]",
    },
    {
      header: "Product",
      className: "pl-4 text-start whitespace-nowrap pt-4 pb-2 w-[70%]",
    },
    {
      header: "Status",
      className: "pl-2 text-start whitespace-nowrap pt-4 pb-2 w-[200px]",
    },
    {
      header: "Inventory",
      className: "pl-2 text-start pt-4 whitespace-nowrap pb-2 w-[200px]",
    },
    {
      header: "Action",
      className: "pl-[11px] text-start pt-4 pr-2 whitespace-nowrap pb-2 w-[56px]",
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

      <td className="pl-4 whitespace-nowrap py-2 w-[70%]">
        <div className="gap-2 flex items-center">
          <img className=" w-6 h-6 object-contain" src={Avatar} alt="Avatar" />
          <span className=" text-[13px] leading-[18px] tracking-[-0.08px] ">
            {item.Product}
          </span>
        </div>
      </td>

      <td className="p-3 whitespace-nowrap w-[200px]">
        <div className="text-xs leading-[16px]">{item.Status}</div>
      </td>
      <td className="py-3 whitespace-nowrap pl-2 w-[200px]">
        <div className="text-xs leading-[16px]">{item.Inventory}</div>
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
