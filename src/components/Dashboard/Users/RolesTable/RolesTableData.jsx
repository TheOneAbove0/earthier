import { Avatar } from "../../../assets/image";
import { ThreeDot } from "../../../assets/icons";

export const RolesTableData = [
  {
    id: 5,
    Name: "Darlene Robertson",
    Email: "ziar@gmail.com",
    Role: "Accountant",
    Date: "03/01/21   6:05am",
    NumberUser: 2,
  },
  {
    id: 4,
    Name: "Ronald Richards",
    Email: "dric@gmail.com",
    Role: "Admin",
    Date: "03/10/21   11:43am",
    NumberUser: 3,
  },
  {
    id: 3,
    Name: "Dianne Russell",
    Email: "cedennar@gmail.com",
    Role: "Owner",
    Date: "03/10/21   11:43am",
    NumberUser: 4,
  },

  {
    id: 2,
    Name: "John Doe",
    Email: "Johndoe@gmail.com",
    Role: "Staff",
    Date: "03/07/21   12:27pm",
    NumberUser: 8,
  },

  {
    id: 1,
    Name: "Theresa Webb",
    Email: "quasiah@gmail.com",
    Role: "Supervisor",
    Date: "03/05/21   6:16pm",
    NumberUser: 12,
  },
  {
    id: 5,
    Name: "Darlene Robertson",
    Email: "ziar@gmail.com",
    Role: "Accountant",
    Date: "03/01/21   6:05am",
    NumberUser: 2,
  },
  {
    id: 4,
    Name: "Ronald Richards",
    Email: "dric@gmail.com",
    Role: "Admin",
    Date: "03/10/21   11:43am",
    NumberUser: 3,
  },
  {
    id: 3,
    Name: "Dianne Russell",
    Email: "cedennar@gmail.com",
    Role: "Owner",
    Date: "03/10/21   11:43am",
    NumberUser: 4,
  },

  {
    id: 2,
    Name: "John Doe",
    Email: "Johndoe@gmail.com",
    Role: "Staff",
    Date: "03/07/21   12:27pm",
    NumberUser: 8,
  },

  {
    id: 1,
    Name: "Theresa Webb",
    Email: "quasiah@gmail.com",
    Role: "Supervisor",
    Date: "03/05/21   6:16pm",
    NumberUser: 12,
  },
  {
    id: 5,
    Name: "Darlene Robertson",
    Email: "ziar@gmail.com",
    Role: "Accountant",
    Date: "03/01/21   6:05am",
    NumberUser: 2,
  },
  {
    id: 4,
    Name: "Ronald Richards",
    Email: "dric@gmail.com",
    Role: "Admin",
    Date: "03/10/21   11:43am",
    NumberUser: 3,
  },
  {
    id: 3,
    Name: "Dianne Russell",
    Email: "cedennar@gmail.com",
    Role: "Owner",
    Date: "03/10/21   11:43am",
    NumberUser: 4,
  },

  {
    id: 2,
    Name: "John Doe",
    Email: "Johndoe@gmail.com",
    Role: "Staff",
    Date: "03/07/21   12:27pm",
    NumberUser: 8,
  },

  {
    id: 1,
    Name: "Theresa Webb",
    Email: "quasiah@gmail.com",
    Role: "Supervisor",
    Date: "03/05/21   6:16pm",
    NumberUser: 12,
  },
];

export const columns = [
  {
    header: "Role",
    className:
      "pl-4 text-start text-xs font-medium leading-[16px] whitespace-nowrap pt-4 pb-2 w-[70%]",
  },

  {
    header: "No. of users",
    className:
      "pl-2 text-start text-xs font-medium leading-[16px] pt-4 whitespace-nowrap pb-2 w-[240px]",
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

export const renderRow = (item, index) => (
  <tr key={index}>
    <td className="pl-4 whitespace-nowrap  py-[15px] w-[80%]">
      <div className="text-xs  flex gap-2  leading-[16px]">
        <span className={` py-1 px-2  `}>{item.Role}</span>
      </div>
    </td>

    <td className="py-2 whitespace-nowrap px-4 w-[120px]">
      <div className="text-xs   leading-[16px]">{item.NumberUser}</div>
    </td>
    <td className={`py-6  whitespace-nowrap  w-[106px]`}>
      <div className={`text-xs w-fit rounded-[3px] px-2 leading-[16px]  `}>
        {item.Date}
      </div>
    </td>

    <td className="pl-[28px] py-[10px]  whitespace-nowrap w-[56px]">
      <div className="font-medium text-xs leading-[16px] text-start">
        <img src={ThreeDot} alt="ThreeDot" />
      </div>
    </td>
  </tr>
);
