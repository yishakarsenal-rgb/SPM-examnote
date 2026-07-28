"use client";

import { Badge } from "@/components/ui/badge";

interface DashboardProps {
  onStartExam: () => void;
  onSelectChapter: (chapterNum: number) => void;
  examScore?: { score: number; total: number } | null;
}

const chapters = [
  {
    id: 1,
    title: "Introduction to SPM",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    questions: 10,
  },
  {
    id: 2,
    title: "Integration Management",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    questions: 10,
  },
  {
    id: 3,
    title: "Scope Management",
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    questions: 10,
  },
  {
    id: 4,
    title: "Schedule Management",
    color: "text-white-300",
    bg: "bg-red-400/10 border-red-400/20",
    questions: 10,
  },
  {
    id: 5,
    title: "Cost Management",
    color: "text-white-300",
    bg: "bg-red-400/10 border-red-400/20",
    questions: 10,
  },
  {
    id: 6,
    title: "HR Management",
    color: "text-white-300",
    bg: "bg-red-400/10 border-red-400/20",
    questions: 10,
  },
  {
    id: 7,
    title: "Risk Management",
    color: "text-white-300",
    bg: "bg-red-400/10 border-red-400/20",
    questions: 10,
  },
  {
    id: 8,
    title: "Quality Management",
    color: "text-white-300",
    bg: "bg-red-400/10 border-red-400/20",
    questions: 10,
  },
];

const stats = [
  {
    label: "Total Chapters",
    value: "8",
    color: "text-cyan-400",
  },
  {
    label: "Exam Questions",
    value: "100",
    color: "text-primary",
  },
  {
    label: "Key Terms",
    value: "80+",
    color: "text-emerald-400",
  },
  {
    label: "Pass Score",
    value: "60%",
    color: "text-orange-400",
  },
];

export function Dashboard({
  onStartExam,
  onSelectChapter,
  examScore,
}: DashboardProps) {
  const percentage = examScore
    ? Math.round((examScore.score / examScore.total) * 100)
    : null;

  return (
    <div className="flex flex-col gap-8">
      {/* hero */}
      <div className="glass-card rounded-2xl p-8 border relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/3 pointer-events-none rounded-2xl" />
        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="text-primary border-primary/30 bg-primary/10 text-xs"
              >
                Exam Prep
              </Badge>
              <Badge
                variant="outline"
                className="text-muted-foreground text-xs"
              >
                8 Chapters
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Software Project Management{" "}
              <span className="neon-text neon-glow"></span>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Complete exam preparation covering Scope, Schedule, Cost, Quality,
              Risk, HR, and Integration management. Master every concept with
              study notes and a 100-question mock exam.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <button
              onClick={onStartExam}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 text-sm"
            >
              Start 100Q Mock Exam
            </button>
            {percentage !== null && (
              <p className="text-xs text-muted-foreground">
                Last score:{" "}
                <span
                  className={
                    percentage >= 60
                      ? "text-emerald-400 font-semibold"
                      : "text-red-400 font-semibold"
                  }
                >
                  {examScore?.score}/{examScore?.total} ({percentage}%)
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card rounded-xl p-4 border flex flex-col gap-2"
          >
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* chapter cards */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">
          Study Notes by Chapter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className={`glass-card glass-card-hover rounded-xl p-5 border ${ch.bg} text-left transition-all duration-200 hover:-translate-y-0.5 group`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">
                  Ch.{ch.id}
                </span>
              </div>
              <h3 className={`text-sm font-semibold ${ch.color} mb-1`}>
                {ch.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {ch.questions} exam questions
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                <span>Study now &rarr;</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* study tips */}
      <div className="glass-card rounded-2xl p-6 border">
        <h2 className="text-base font-semibold text-foreground mb-4">
          Exam Strategy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: "Review Study Notes",
              desc: "Read all 8 chapter notes. Focus on key terms, formulas, and highlighted concepts.",
            },
            {
              step: "2",
              title: "Learn the Formulas",
              desc: "Memorize EVM formulas (CPI, SPI, EAC, ETC, TCPI), PERT formula, NPV, and CPM rules.",
            },
            {
              step: "3",
              title: "Take Mock Exam",
              desc: "Complete all 100 questions. Review explanations for every wrong answer. Score 60%+ to pass.",
            },
          ].map((tip) => (
            <div key={tip.step} className="flex gap-3">
              <span
                className={`text-2xl font-bold ${tip.color} font-mono opacity-40 shrink-0`}
              >
                {tip.step}
              </span>
              <div>
                <p className={`text-sm font-semibold ${tip.color} mb-1`}>
                  {tip.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
