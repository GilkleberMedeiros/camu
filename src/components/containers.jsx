import { twMerge } from "tailwind-merge";

import { SectionTitle  } from "./titles.jsx";
import { normalizeStrToId } from "../scripts/utils.js";


export function Section({ title, style="", children })
{
  const normalizedTitle = normalizeStrToId(title);

  return (
    <div id={`section${normalizedTitle}`} 
      className={twMerge("flex flex-col gap-[2.5rem] items-center p-[1.25rem]", style)}>
      <SectionTitle title={title} />
      {children}
    </div>
  );
}

export function ZebraOpeningHoursTable({ openingHoursInfo })
{
  return (
    <table className="w-[28.126rem]">
      <tbody>
        <tr 
          id="tableRowSegunda" 
          className="
            flex text-[0.75rem] font-medium bg-secondary-black text-white p-[7px] min-xl:p-[0.5rem] max-c-s:p-[6px]
          "
        >
          <td className="inline-flex justify-center w-[50%]">Segunda-feira</td>
          <td className="inline-flex justify-center w-[50%]" >
            {openingHoursInfo.monday}
          </td>
        </tr>
        <tr 
          id="tableRowTerca" 
          className="
            flex text-[0.75rem] font-medium bg-secondary-white text-black p-[7px] min-xl:p-[0.5rem] max-c-s:p-[6px]
          "
        >
          <td className="inline-flex justify-center w-[50%]" >Terça-feira</td>
          <td className="inline-flex justify-center w-[50%]" >
            {openingHoursInfo.tuesday}
          </td>
        </tr>
        <tr 
          id="tableRowQuarta" 
          className="
            flex text-[0.75rem] font-medium bg-secondary-black text-white p-[7px] min-xl:p-[0.5rem] max-c-s:p-[6px]
          "
        >
          <td className="inline-flex justify-center w-[50%]" >Quarta-feira</td>
          <td className="inline-flex justify-center w-[50%]" >
            {openingHoursInfo.wednesday}
          </td>
        </tr>
        <tr 
          id="tableRowQuinta" 
          className="
            flex text-[0.75rem] font-medium bg-secondary-white text-black p-[7px] min-xl:p-[0.5rem] max-c-s:p-[6px]
          "
        >
          <td className="inline-flex justify-center w-[50%]" >Quinta-feira</td>
          <td className="inline-flex justify-center w-[50%]" >
            {openingHoursInfo.thursday}
          </td>
        </tr>
        <tr 
          id="tableRowSexta" 
          className="
            flex text-[0.75rem] font-medium bg-secondary-black text-white p-[7px] min-xl:p-[0.5rem] max-c-s:p-[6px]
          "
        >
          <td className="inline-flex justify-center w-[50%]" >Sexta-feira</td>
          <td className="inline-flex justify-center w-[50%]" >
            {openingHoursInfo.friday}
          </td>
        </tr>
        <tr 
          id="tableRowSabado" 
          className="
            flex text-[0.75rem] font-medium bg-secondary-white text-black p-[7px] min-xl:p-[0.5rem] max-c-s:p-[6px]
          "
        >
          <td className="inline-flex justify-center w-[50%]" >Sabádo</td>
          <td className="inline-flex justify-center w-[50%]" >
            {openingHoursInfo.saturday}
          </td>
        </tr>
        <tr 
          id="tableRowDomingo" 
          className="
            flex text-[0.75rem] font-medium bg-secondary-black text-white p-[7px] min-xl:p-[0.5rem] max-c-s:p-[6px]
          "
        >
          <td className="inline-flex justify-center w-[50%]" >Domingo</td>
          <td className="inline-flex justify-center w-[50%]" >
            {openingHoursInfo.sunday}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function FloatingBtnsContainer({ children })
{
  return (
    <div className="fixed right-[22px] max-sm:right-[11px] bottom-[22px] max-sm:bottom-[11px] flex flex-col gap-[1.375rem]">
      {children}
    </div>
  );
}

export function ContactTextBox({ style="", children })
{
  return (
    <div className={
      style || 
      "w-[21.5rem] flex flex-col justify-center items-center gap-[2.875rem] px-[0.6875rem] py-[1.375rem] "}>
      {children}
    </div>
  );
}

export function Modal({ style="", children, ...rest })
{
  return (
    <dialog
      className={twMerge("", style)}
      {...rest}
    >
      {children}
    </dialog>
  );
}