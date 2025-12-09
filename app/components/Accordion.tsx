"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
  return (
    <div
      className={`group rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-violet-500/50 bg-slate-800/80 shadow-lg shadow-violet-500/10"
          : "border-slate-700/50 bg-slate-900/50 hover:border-slate-600/50 hover:bg-slate-800/50"
      }`}
    >
      <button
        className="flex w-full items-center gap-4 p-4 text-left"
        onClick={onToggle}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xs font-bold text-white">
          {index + 1}
        </span>
        <span className="flex-1 text-sm font-medium text-slate-200 leading-relaxed">
          {question}
        </span>
        <span
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-700/50 p-4 pt-3">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                Answer
              </span>
            </div>
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Question {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface AccordionProps {
  questions: Question[];
}

export function Accordion({ questions }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-700/50 bg-slate-900/50 py-16">
        <div className="mb-4 text-5xl">📭</div>
        <p className="text-slate-400">No questions available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {questions.map((q, index) => (
        <AccordionItem
          key={q.id}
          question={q.question}
          answer={q.answer}
          isOpen={openItems.has(q.id)}
          onToggle={() => toggleItem(q.id)}
          index={index}
        />
      ))}
    </div>
  );
}
