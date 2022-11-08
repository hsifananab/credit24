import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { faqItems } from '../../data/data';

// const FaqAccordion = () => {
//   return (
//     <Accordion defaultActiveKey="0" className="rounded-[25px]">
//       {faqItems.map((item, index) => (
//         <FaqAccordionItem
//           key={item.title}
//           index={index.toString()}
//           item={item}
//         />
//       ))}
//     </Accordion>
//   );
// };

// export default FaqAccordion;

// interface FaqAccordionItemProps {
//   index: string;
//   item: {
//     title: string;
//     body: string;
//   };
// }

// const FaqAccordionItem = ({ index, item }: FaqAccordionItemProps) => {
//   return (
//     <Accordion.Item
//       eventKey={index}
//       className="mb-[15px] shadow-[0px_2px_7px_rgba(0,0,0,0.12)] rounded-[25px]"
//     >
//       <Accordion.Header className="rounded-[25px]">
//         {item.title}
//       </Accordion.Header>
//       <Accordion.Body className="rounded-[25px]">{item.body}</Accordion.Body>
//     </Accordion.Item>
//   );
// };

const FaqAccordion = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      {faqItems.map((item, index) => (
        <FaqAccordionItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default FaqAccordion;

interface FaqAccordionItemProps {
  item: {
    title: string;
    body: string;
  };
}

const FaqAccordionItem = ({ item }: FaqAccordionItemProps) => {
  return (
    <div>
      <div className="relative shadow-[0px_2px_7px_rgba(0,0,0,0.12)] rounded-[25px] pt-[14px] pb-[15px] px-[28px]">
        {item.title}
        <BsChevronDown className="absolute right-[40px] top-1/2 -translate-y-1/2 " />
      </div>
      <div className="hidden">{item.body}</div>
    </div>
  );
};
