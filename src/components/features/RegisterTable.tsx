import { useState } from "react";
import { RiPlayLargeFill } from "react-icons/ri";
import { RiPlayReverseLargeFill } from "react-icons/ri";
import ActionButton from "../ui/ActionButton";  

function RegisterTable({ subtitle, header, registers, pagination }: any) {
  const [page, setPage] = useState(0);
  
  const totalPages = (Math.ceil(registers.length/pagination) - 1);
  const previousPage = () => {
    setPage(p => Math.max((p - 1), 0));
  }
  const nextPage = () => {
    setPage(p => Math.min((p + 1), totalPages));
  }
  const currentPage = registers.slice((page * pagination), (page * pagination) + pagination);
  const remainingRegisters = (pagination - (registers.length % pagination)) % pagination;

  return (
    <section className="flex flex-col justify-center items-center p-3">
      <h2 className="text-black text-center font-medium text-2xl p-3">{subtitle}</h2>
      <div className="bg-modals grid w-4xl rounded-2xl shadow-sm h-92" lang="es">  
        <ul className="grid grid-cols-7 gap-2 text-center items-center p-2 border-b-2 border-[#ADA87F]">
          {
            header.map((h: any) => (
              <li key={`${subtitle}-${h}`} className="text-black text-center max-w-3xl font-semibold">{h}</li>
            ))
          }
        </ul>

        {
          currentPage.map((rgtr: any) => (
            <ul key={rgtr.id} className="grid grid-cols-7 gap-2 text-center items-center p-4 h-16">
              {
                Object.keys(rgtr)
                  .filter(rgtrKey => (rgtrKey !== "id"))
                  .map(rgtrKey => (
                    <li key={`${rgtr.id}-${rgtrKey}`} title={rgtr[rgtrKey]}
                    className="text-black text-center text-sm max-w-3xl font-medium line-clamp-2">{rgtr[rgtrKey]}</li>
                  )
                )
              }
            </ul>    
          )
        )}

        {
          ((remainingRegisters !== 0) && (page === totalPages)) ?
            Array.from({ length: remainingRegisters }, (_, i) => (
              <ul key={`void-row-${subtitle}-${i}`} className="grid grid-cols-7 gap-2 text-center items-center p-4 h-16">
                {
                  header.map((_: any, j: number) => (
                    <li key={`void-column-${subtitle}-${i}-${j}`} className="text-black text-center text-sm max-w-3xl p-5 font-medium truncate">
                      {""}
                    </li>
                  ))
                }
              </ul>
            ))
          : <></> 
        }
      </div>
      <div className="flex items-center justify-center gap-20 p-4">
        <ActionButton bgColor={"#E0DAB2"} hoverColor={"#82d9b6"} IconName={RiPlayReverseLargeFill} 
        action={"Anterior"} clickAction={previousPage}>
        </ActionButton>
        <ActionButton bgColor={"#E0DAB2"} hoverColor={"#82d9b6"} IconName={RiPlayLargeFill}
        action={"Siguiente"} clickAction={nextPage}>
        </ActionButton>
      </div>
    </section>
  );
}

export default RegisterTable;