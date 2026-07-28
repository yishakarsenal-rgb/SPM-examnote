"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Dashboard } from "@/components/dashboard";
import { ChapterNotes } from "@/components/chapter-notes";
import { ExamEngine } from "@/components/exam-engine";
import { Footer } from "@/components/footer";

export default function Home() {
  const [view, setView] = useState<"home" | "chapter" | "exam">("home");
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const handleSelectChapter = (chapterNum: number) => {
    setSelectedChapter(chapterNum);
    setView("chapter");
  };

  const handleStartExam = () => {
    setView("exam");
  };

  const handleBackHome = () => {
    setView("home");
    setSelectedChapter(null);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* main layout */}
      <div className="relative z-10 flex h-screen">
        {/* sidebar */}
        <AppSidebar
          onSelectChapter={handleSelectChapter}
          onStartExam={handleStartExam}
        />

        {/* main content area */}
        <main className="flex-1 overflow-hidden flex flex-col">
          {/* header with home button */}
          <header className="border-b border-slate-700/50 bg-background/80 backdrop-blur-sm px-6 py-4">
            <button
              onClick={handleBackHome}
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Back to Home
            </button>
          </header>

          {/* content */}
          <div className="flex-1 overflow-auto pb-28">
            {view === "home" && (
              <Dashboard
                onStartExam={handleStartExam}
                onSelectChapter={handleSelectChapter}
              />
            )}
            {view === "chapter" && selectedChapter !== null && (
              <ChapterNotes chapterNumber={selectedChapter} />
            )}
            {view === "exam" && <ExamEngine />}
          </div>
        </main>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
