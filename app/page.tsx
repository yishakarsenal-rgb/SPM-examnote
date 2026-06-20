'use client';

import { useState } from 'react';
import { ParticleBackground } from '@/components/particle-background';
import { AppSidebar } from '@/components/app-sidebar';
import { Dashboard } from '@/components/dashboard';
import { ChapterNotes } from '@/components/chapter-notes';
import { ExamEngine } from '@/components/exam-engine';
import { Calculator } from '@/components/calculator';
import { Calculator as CalculatorIcon } from 'lucide-react';

export default function Home() {
  const [view, setView] = useState<'home' | 'chapter' | 'exam'>('home');
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const handleSelectChapter = (chapterNum: number) => {
    setSelectedChapter(chapterNum);
    setView('chapter');
  };

  const handleStartExam = () => {
    setView('exam');
  };

  const handleBackHome = () => {
    setView('home');
    setSelectedChapter(null);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Main layout */}
      <div className="relative z-10 flex h-screen">
        {/* Sidebar */}
        <AppSidebar onSelectChapter={handleSelectChapter} onStartExam={handleStartExam} />

        {/* Main content area */}
        <main className="flex-1 overflow-hidden flex flex-col">
          {/* Header with home button */}
          <header className="border-b border-slate-700/50 bg-background/80 backdrop-blur-sm px-6 py-4">
            <button
              onClick={handleBackHome}
              className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Back to Home
            </button>
          </header>

          {/* Content */}
          <div className="flex-1 overflow-auto">
            {view === 'home' && <Dashboard onStartExam={handleStartExam} onSelectChapter={handleSelectChapter} />}
            {view === 'chapter' && selectedChapter !== null && (
              <ChapterNotes chapterNumber={selectedChapter} />
            )}
            {view === 'exam' && <ExamEngine />}
          </div>
        </main>
      </div>

      {/* Floating Calculator Button */}
      <button
        onClick={() => setCalculatorOpen(true)}
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center size-14 rounded-full glass-card neon-border hover:bg-cyan-500/10 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 group"
        title="Open Calculator"
      >
        <CalculatorIcon className="size-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
      </button>

      {/* Calculator Modal */}
      <Calculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </div>
  );
}
