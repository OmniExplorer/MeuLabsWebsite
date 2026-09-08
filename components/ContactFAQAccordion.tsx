'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import type { LucideIcon } from 'lucide-react';
import { ChevronDown, ClipboardCheck, Monitor, Phone, Route, School, TrendingUp, UsersRound } from 'lucide-react';

const faqs: Array<{
  question: string;
  answer: string;
  icon: LucideIcon;
}> = [
  {
    question: 'Which course should my child start with?',
    answer:
      'If your child is new to robotics, coding, or STEM, our Level 1 Foundations programmes are usually the best starting point. If they already have experience, our student counselors can recommend a suitable course based on their interests and readiness.',
    icon: Route
  },
  {
    question: 'Can my child join without prior experience?',
    answer: 'Yes. Several Meu Labs courses are designed for beginners. Advanced courses may require prior experience or a short eligibility discussion.',
    icon: UsersRound
  },
  {
    question: 'Does my child have to be within the age range mentioned for the course?',
    answer:
      'Not necessarily. The age ranges mentioned for each course are only a general guideline. At Meu Labs, our programmes are competency-based rather than strictly age-based, so we look at a child’s interest, confidence, prior experience, and readiness for the course. Some younger students may join more advanced programmes because they already have strong interest, experience, or a clear idea of what they want to build and learn. Some older students may also choose courses recommended for younger age groups because they want to explore new areas, build confidence, or learn at their own pace. Our student counsellors can help recommend the most suitable starting point based on your child’s current skill level, interests, and learning goals.',
    icon: School
  },
  {
    question: 'How do I register for a course?',
    answer:
      'You can register through the relevant course page. If you are unsure which course or intake to choose, our student counselor can guide you and send the correct registration link.',
    icon: ClipboardCheck
  },
  {
    question: 'Do you offer online and in-person classes?',
    answer: 'Some courses are available online, while others are delivered in person at Meu Labs Colombo. Each course page shows the available format.',
    icon: Monitor
  },
  {
    question: 'How do parents know if students are improving?',
    answer:
      'Parents receive regular updates on student work and progress. Students are also assessed through projects, participation, teamwork, creativity, and technical understanding.',
    icon: TrendingUp
  },
  {
    question: 'Do you work with schools?',
    answer: 'Yes. Meu Labs works with schools through courses, clubs, workshops, competitions, teacher development, and infrastructure support.',
    icon: School
  },
  {
    question: 'Can I speak to someone before registering?',
    answer: 'Yes. You can contact a student counselor through WhatsApp or phone before registering.',
    icon: Phone
  }
];

export function ContactFAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="overflow-hidden rounded-lg border-2 border-orange/15 bg-[#FFF8EF] shadow-[0_12px_34px_rgba(13,53,87,0.08)]">
      {faqs.map(({ question, answer, icon: FaqIcon }, index) => {
        const isOpen = open === index;
        return (
          <div key={question} className="group border-b-2 border-orange/10 last:border-b-0">
            <button
              type="button"
              aria-expanded={isOpen}
              className={`grid w-full cursor-pointer list-none grid-cols-[2.75rem_1fr_1.5rem] items-center gap-4 px-4 py-5 text-left text-navy transition-colors duration-200 sm:px-6 sm:py-6 ${isOpen ? 'bg-[#FFE7CE]/55' : 'hover:bg-[#FFE7CE]/40'}`}
              onClick={() => { trackEvent('faq_toggle', { source: 'contact', question_id: index, action: isOpen ? 'close' : 'open' }); setOpen(isOpen ? -1 : index); }}
            >
              <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF4F1F] text-white shadow-soft transition duration-300 ${isOpen ? 'scale-105' : ''}`}>
                <FaqIcon size={19} strokeWidth={2.5} aria-hidden />
              </span>
              <span className="text-sm font-black leading-snug sm:text-base">{question}</span>
              <ChevronDown size={18} className={`text-navy transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
            </button>
            <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className={`transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? 'translate-y-0' : '-translate-y-2'}`}>
                <p className="px-4 pb-6 pl-[5rem] pr-8 text-base font-bold leading-8 text-slate-700 sm:px-6 sm:pl-[5.75rem]">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
