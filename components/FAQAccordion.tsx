'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQAccordion() {
  const faqs = [
    ['Which course should my child start with?', 'If new to STEM, Knowledge Explorers is usually the best starting point. If they have experience or a strong interest, our student counselors can help recommend the right course.'],
    ['Can my child join without prior experience?', 'Yes. Several Meu Labs courses are designed for beginners. Advanced specialisations may require prior learning or instructor guidance before joining.'],
    ['How are classes delivered?', 'Through weekly guided sessions with hands-on projects, instructor support, and structured learning outcomes.'],
    ['What happens after one course?', 'Students continue along the Meu Labs pathway into learning paths and advanced specialisations based on their interests and readiness.']
  ];
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-4">
      {faqs.map(([question, answer], index) => (
        <div key={question} className="rounded-card bg-white shadow-soft">
          <button type="button" className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-extrabold text-navy" onClick={() => setOpen(open === index ? -1 : index)}>
            {question}
            <ChevronDown className={`shrink-0 transition ${open === index ? 'rotate-180' : ''}`} size={20} />
          </button>
          {open === index && <p className="px-6 pb-6 leading-7 text-slate-700">{answer}</p>}
        </div>
      ))}
    </div>
  );
}
