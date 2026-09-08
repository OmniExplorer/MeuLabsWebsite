'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export function FAQAccordion() {
  const faqs = [
    ['Which course should my child start with?', 'If your child is new to robotics, coding or STEM, Knowledge Explorers is usually the best starting point. If they already have experience or a strong interest, our student counselors can help recommend the right course.'],
    ['Can my child join without prior experience?', 'Yes. Several Meu Labs courses are designed for beginners. Advanced specializations may require prior learning or instructor guidance before joining.'],
    ['Does my child have to be within the age range mentioned for the course?', 'Not necessarily. The age ranges mentioned for each course are only a general guideline. At Meu Labs, our programmes are competency-based rather than strictly age-based. This means we look at a child’s interest, confidence, prior experience, and readiness for the course. Our student counsellors can help recommend the most suitable starting point based on your child’s current skill level, interests, and learning goals.'],
    ['How are classes delivered?', 'Most Meu Labs courses are delivered through weekly guided sessions with hands-on projects, instructor support and structured learning outcomes.'],
    ['What happens after one course?', 'Students can continue along the Meu Labs pathway into learning paths and advanced specializations based on their interests and readiness.']
  ];
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map(([question, answer], index) => (
        <div key={question} className={`overflow-hidden rounded-[18px] border bg-white shadow-soft transition duration-300 ${open === index ? 'border-orange/35' : 'border-navy/10'}`}>
          <button type="button" className="grid w-full grid-cols-[1fr_1.5rem] items-center gap-4 px-6 py-5 text-left text-navy" aria-expanded={open === index} onClick={() => { trackEvent('faq_toggle', { source: 'general', question_id: index, action: open === index ? 'close' : 'open' }); setOpen(open === index ? -1 : index); }}>
            <span className="text-lg font-extrabold leading-snug">{question}</span>
            <ChevronDown className={`shrink-0 text-orange transition duration-300 ${open === index ? 'rotate-180' : ''}`} size={22} />
          </button>
          <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className={`border-t border-navy/10 px-6 text-base font-semibold leading-8 text-slate-700 transition-all duration-300 ${open === index ? 'py-5 opacity-100' : 'py-0 opacity-0'}`}>{answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
