import React from "react";


export function SectionTitle({ title })
{
  const standardRootFontSize = 16; // 16px

  const h2Ref = React.useRef(null);
  const hrRef = React.useRef(null);
  const [hrWidth, setHrWidth] = React.useState(300/standardRootFontSize); // 18.75rem

  React.useEffect(() => {
    if (
      h2Ref.current && h2Ref.current.offsetWidth >= 
      ((hrWidth * standardRootFontSize) - 50)
    ) {
      let h2Width = h2Ref.current.offsetWidth;
      setHrWidth((h2Width + 100)/standardRootFontSize);
      hrRef.current.style.width = (hrWidth).toString() + "rem";
    }
  }, []); // Will load once after the first render

  return (
    <div id={`setionTitle${title}Container`} 
      className="w-fit flex flex-col gap-[10px] items-center">
      <h2 id={`sectionTitle${title}Title`} 
        ref={h2Ref} 
        className="font-medium text-[1.5rem]">{title}</h2>
      <hr id={`sectionTitle${title}Line`} 
        ref={hrRef} 
        style={{width: (hrWidth).toString() + "rem"}}
        className="border-main-black border-t-2"
      />
    </div>
  );
}