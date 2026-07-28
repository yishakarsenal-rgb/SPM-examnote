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
