"use client";

import React from "react";

import infos from "@/infos";
import { 
  FloatingBtnsContainer, 
  Section, 
  ZebraOpeningHoursTable, 
  ContactTextBox 
} from "@/components/containers";
import { InfinityCardsList } from "@/components/cards";
import { ImageTextCarousel } from "@/components/carousels";
import PhysicalAdressCard from "@/components/composed/adressCard";
import { ImageIcon } from "@/components/icons";
import { Link } from "@/components/links";

const whatsIcon = "/assets/icons/whats-icon.svg";
const mailIcon = "/assets/icons/mail.svg";

const isWithinBoundsWorkerPath = "/scripts/isWithinBounds.js";


export default function Home()
{
  const parentRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Wait for refs to be available
    if (!parentRef.current || !targetRef.current) return;

    const parent = parentRef.current;
    const target = targetRef.current;

    const worker = new Worker(isWithinBoundsWorkerPath, { type: "module" });

    // Handle worker response
    worker.onmessage = (e) => {
      const { isWithinBounds } = e.data;
      target.style.position = isWithinBounds ? 'fixed' : 'absolute';
    };

    // Add event listeners with debounce for performance
    let timeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Send data to worker
        worker.postMessage({
          parentRect: parent.getBoundingClientRect(),
          targetRect: target.getBoundingClientRect()
        });
      }, 100);
    };

    // Add listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    worker.postMessage({
      parentRect: parent.getBoundingClientRect(),
      targetRect: target.getBoundingClientRect(),
    });

    // Cleanup
    return () => {
      worker.terminate();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []); // Empty dependency array = run once on mount

  const physicalAdresses = infos.infos.physicalAdresses;

  const openingHoursInfo = infos.infos.openingHours;

  const phoneNumber = infos.infos.contact.phoneNumber;
  const phoneNumberDisplay = infos.infos.contact.phoneNumberDisplay;
  const email = infos.infos.contact.email;

  const useFloatingButtons = infos.infos.useFloatingButtons;

  return (
    <main 
      className="m-0 b-0 p-0 relative"
      ref={parentRef}
    >
      {useFloatingButtons && 
        <FloatingBtnsContainer
          className="mb-4" 
          ref={targetRef}
        >
          <a 
            id="floatingWhats"
            href={`https://wa.me/${phoneNumber}`}
            className="
              size-[4.375rem] flex justify-center items-center
              rounded-full p-[0.75rem] border-main-black 
              border-[3px] max-sm:border-[2px] min-xl:border-[0.1875rem]
              bg-main-white inset-shadow-main-black/25 max-sm:hidden
              inset-shadow-[-0.125rem_-0.125rem_0.0625rem_0.0625rem] cursor-pointer
            "
          >
            <ImageIcon 
              src={whatsIcon} 
              alt="Mande uma mensagem no whatsapp."
              className="size-[2.8125rem]"
            />
          </a>
          <a 
            id="floatingMail"
            href={`mailto:${email}`}
            className="
              size-[4.375rem] flex justify-center items-center
              rounded-full p-[0.75rem] border-main-black 
              border-[3px] max-sm:border-[2px] min-xl:border-[0.1875rem]
              bg-main-white inset-shadow-main-black/25 max-sm:hidden
              inset-shadow-[-0.125rem_-0.125rem_0.0625rem_0.0625rem] cursor-pointer
            "
          >
            <ImageIcon 
              src={mailIcon} 
              alt="Mande um email."
              className="size-[2.8125rem]"
            />
          </a>
        </FloatingBtnsContainer>
      }

      <Section title="Sobre">
        <ImageTextCarousel />
      </Section>
      <Section title="Localização" className="pr-0">
        <InfinityCardsList>
          {
            physicalAdresses.map((v, i) => {
              return (
                <PhysicalAdressCard key={i} adressInfo={v} />
              );
            })
          }
        </InfinityCardsList>
      </Section>
      <Section title="Horário de funcionamento">
        <ZebraOpeningHoursTable openingHoursInfo={openingHoursInfo}/>
      </Section>
      <Section title="Entre em contato">
        <ContactTextBox>
          <span className="text-[0.8125rem] text-center">
            <Link href={`mailto:${email}`} className="text-[0.8125rem]">Mande um email</Link> em {email}
          </span>
          <span className="text-[0.9375rem] font-medium">
            OU
          </span>
          <span className="text-[0.8125rem] text-center">
            Ligue,&nbsp;
            <Link href={`https://wa.me/${phoneNumber}`} className="text-[0.8125rem]">
              mande uma mensagem
            </Link>&nbsp;
            pelo whatsapp em {phoneNumberDisplay}
          </span>
        </ContactTextBox>
      </Section>
    </main>
  );
}
