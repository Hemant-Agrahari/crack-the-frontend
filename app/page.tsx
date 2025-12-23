"use client";

import { useMemo, useState } from "react";
import { Accordion } from "./components/Accordion";
import { Tabs } from "./components/Tabs";
import { questions } from "./data/questions";

const categoryTabs = [
  { id: "html", label: "HTML", icon: "🌐" },
  { id: "css", label: "CSS", icon: "🎨" },
  { id: "javascript", label: "JavaScript", icon: "⚡" },
  { id: "typescript", label: "TypeScript", icon: "📘" },
  { id: "react", label: "React", icon: "⚛️" },
  { id: "nextjs", label: "Next.js", icon: "▲" },
  { id: "redux", label: "Redux", icon: "🔄" },
  { id: "socket", label: "Socket", icon: "🔌" },
  { id: "output-based", label: "Output Based", icon: "🖥️" },
  { id: "program", label: "Program", icon: "💻" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("html");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = useMemo(() => {
    let filtered = questions.filter((q) => q.category === activeTab);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (q) =>
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeTab, searchQuery]);

  const totalQuestions = questions.filter(
    (q) => q.category === activeTab
  ).length;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-800/50 backdrop-blur-md bg-slate-950/80 sticky top-0 z-20">
          <div className="mx-auto max-w-5xl px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-fuchsia-600 text-2xl shadow-lg shadow-violet-500/25">
                  🚀
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    Frontend-Concepts-Collection
                  </h1>
                  <p className="text-xs text-slate-500">
                    Frontend-Question-Bank
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-slate-800/50 px-4 py-2 border border-slate-700/50">
                <span className="text-2xl font-bold bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {questions.length}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Questions
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto max-w-7xl px-4 py-6">
          {/* Tabs */}
          <Tabs
            tabs={categoryTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Content header with search */}
          <div className="mt-6 mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                <span>
                  {categoryTabs.find((t) => t.id === activeTab)?.icon}
                </span>
                <span>
                  {categoryTabs.find((t) => t.id === activeTab)?.label}{" "}
                  Questions
                </span>
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {filteredQuestions.length} of {totalQuestions} questions
              </p>
            </div>

            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-72 rounded-xl border border-slate-700/50 bg-slate-900/50 py-2.5 pl-10 pr-10 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
              />
              {searchQuery && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  onClick={() => setSearchQuery("")}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Accordion questions */}
          <Accordion questions={filteredQuestions} />
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 mt-12">
          <div className="mx-auto max-w-5xl px-4 py-6 text-center">
            <p className="text-sm text-slate-500">
              Built with ❤️ for aspiring frontend developers
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
