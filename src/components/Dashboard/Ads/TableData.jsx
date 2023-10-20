import { Sky } from "../../assets/image/index";
import { ThreeDot } from "../../assets/icons/index";

export const TableData = [
  {
    id: 5,
    Title: "Title here.....",
    SubTitle: "Category: Honey ",
    Image: Sky,
    

    Status: 'Active',
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },
  {
    id: 4,
    Title: "Ronald Richards",
    SubTitle: "Product: Hilly Honey",
    Status: 'Archived',

    Image: Sky,
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },
  {
    id: 3,
    Title: "Dianne Russell",
    SubTitle: "Product: Hilly Honey",

    Status: 'Expired',
    Image: Sky,
   
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },
  {
    id: 5,
    Title: "Title here.....",
    SubTitle: "Category: Honey ",
    Image: Sky,
    

    Status: 'Active',
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },
  {
    id: 4,
    Title: "Ronald Richards",
    SubTitle: "Product: Hilly Honey",
    Status: 'Archived',

    Image: Sky,
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },
  {
    id: 3,
    Title: "Dianne Russell",
    SubTitle: "Product: Hilly Honey",

    Status: 'Expired',
    Image: Sky,
   
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },

  {
    id: 5,
    Title: "Title here.....",
    SubTitle: "Category: Honey ",
    Image: Sky,
    

    Status: 'Active',
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },
  {
    id: 4,
    Title: "Ronald Richards",
    SubTitle: "Product: Hilly Honey",
    Status: 'Archived',

    Image: Sky,
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },
  {
    id: 3,
    Title: "Dianne Russell",
    SubTitle: "Product: Hilly Honey",

    Status: 'Expired',
    Image: Sky,
   
    StartDate: "03/10/21   11:43am",
    ExpiryDate: "03/02/21   6:05am",
  },

  
];

export const RoleColors = {
  Active: "bg-Success bg-opacity-10 text-Success",
  Archived: "bg-Danger bg-opacity-10 text-Danger",
  Expired: "bg-Black bg-opacity-10 text-Black",
  
};



export const columns = [

  {
    header: "Title",
    className:
      "pl-4 text-start text-xs font-medium leading-[16px] whitespace-nowrap pt-4 pb-2 w-[50%]",
  },
  {
    header: "Status",
    className:
      "pl-2 text-start text-xs font-medium leading-[16px] whitespace-nowrap pt-4 pb-2 w-[96px]",
  },
  {
    header: "Start date",
    className:
      "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[128px]",
  },
  
  {
    header: "Expiry date",
    className:
      "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[128px]",
  },
  {
    header: "Action",
    className:
      "pl-[11px] text-xs font-medium leading-[16px] text-start pt-4 pr-2 whitespace-nowrap pb-2 w-[56px]",
  },
];

export const renderRow = (item, index) => (
  <tr key={index}>
    

    <td className="whitespace-nowrap py-3 pl-2 w-[75%]">
      <div className=" flex gap-2 items-center ">
        <img className="  w-[96px] h-[64px]  " src={item.Image} alt="Sky" />
        <div className=" flex flex-col items-start justify-start ">
          <span className=" text-[13px] font-bold leading-[18px] tracking-[-0.08px] ">
            {item.Title}
          </span>
          <span className=" text-[12px] leading-[18px] tracking-[-0.08px] text-Tertiary">
            {item.SubTitle}
          </span>
        </div>
      </div>
    </td>

    <td className="px-2 py-5 whitespace-nowrap w-[96px]">
      <div className="text-xs  flex gap-2  leading-[16px]">
        <span className={` py-1 px-2 ${RoleColors[item.Status] || ""} `}>
          {item.Status}
        </span>
        
      </div>
    </td>
   
    <td className={`py-6  whitespace-nowrap  w-[128px]`}>
      <div className={`text-xs w-fit rounded-[3px] px-2 leading-[16px]  `}>
        {item.StartDate}
      </div>
    </td>
    <td className={`py-6  whitespace-nowrap  w-[128px]`}>
      <div className={`text-xs w-fit rounded-[3px] px-2 leading-[16px]  `}>
        {item.ExpiryDate}
      </div>
    </td>

    <td className="pl-[28px] py-[10px]  whitespace-nowrap w-[56px]">
      <div className="font-medium text-xs leading-[16px] text-start">
        <img src={ThreeDot} alt="ThreeDot" />
      </div>
    </td>
  </tr>
);
