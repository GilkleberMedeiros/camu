import { SectionTitle  } from "./titles.jsx";
import { normalizeStrToId } from "../scripts.js/utils.js";


export function Section({ title, children })
{
  const normalizedTitle = normalizeStrToId(title);

  return (
    <div id={`section${normalizedTitle}`} 
      className="flex flex-col gap-[2.5rem] items-center p-[1.25rem]">
      <SectionTitle title={title} />
      {children}
    </div>
  );
}
