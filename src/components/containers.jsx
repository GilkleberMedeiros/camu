import { SectionTitle  } from "./titles.jsx";


export function Section({ title, children })
{
  return (
    <div id={`section${title}`} 
      className="flex flex-col gap-[2.5rem] items-center p-[1.25rem]">
      <SectionTitle title={title} />
      {children}
    </div>
  );
}
