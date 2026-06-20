"use client"

import {
  BookOpen, Calendar, DollarSign, Users, AlertTriangle, CheckCircle,
  GitMerge, Target, FlaskConical, TrendingUp, Award, Zap, ArrowRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DashboardProps {
  onStartExam: () => void
  onSelectChapter: (chapterNum: number) => void
  examScore?: { score: number; total: number } | null
}

const chapters = [
  { id: 1, title: "Introduction to SPM", icon: BookOpen, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20", questions: 10 },
  { id: 2, title: "Integration Management", icon: GitMerge, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", questions: 10 },
  { id: 3, title: "Scope Management", icon: Target, color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/20", questions: 10 },
  { id: 4, title: "Schedule Management", icon: Calendar, color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20", questions: 10 },
  { id: 5, title: "Cost Management", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20", questions: 10 },
  { id: 6, title: "HR Management", icon: Users, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20", questions: 10 },
  { id: 7, title: "Risk Management", icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", questions: 10 },
  { id: 8, title: "Quality Management", icon: CheckCircle, color: "text-cyan-300", bg: "bg-cyan-400/10 border-cyan-400/20", questions: 10 },
]

const stats = [
  { label: "Total Chapters", value: "8", icon: BookOpen, color: "text-cyan-400" },
  { label: "Exam Questions", value: "100", icon: FlaskConical, color: "text-primary" },
  { label: "Key Terms", value: "80+", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Pass Score", value: "60%", icon: Award, color: "text-orange-400" },
]

export function Dashboard({ onStartExam, onSelectChapter, examScore }: DashboardProps) {
  const percentage = examScore ? Math.round((examScore.score / examScore.total) * 100) : null

  return (
    <div className="flex flex-col gap-8">
      {/* Hero */}
      <div className="glass-card rounded-2xl p-8 border relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/3 pointer-events-none rounded-2xl" />
        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-primary border-primary/30 bg-primary/10 text-xs">
                Exam Prep
              </Badge>
              <Badge variant="outline" className="text-muted-foreground text-xs">
                8 Chapters
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Software{" "}
              <span className="neon-text neon-glow">Project Management</span>
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Complete exam preparation covering Scope, Schedule, Cost, Quality, Risk, HR, and Integration management.
              Master every concept with study notes and a 100-question mock exam.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <button
              onClick={onStartExam}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 text-sm"
            >
              <Zap className="size-4" />
              Start 100Q Mock Exam
            </button>
            {percentage !== null && (
              <p className="text-xs text-muted-foreground">
                Last score:{" "}
                <span className={percentage >= 60 ? "text-emerald-400 font-semibold" : "text-red-400 font-semibold"}>
                  {examScore?.score}/{examScore?.total} ({percentage}%)
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-4 border flex flex-col gap-2">
            <stat.icon className={`size-5 ${stat.color}`} />
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Chapter Cards */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="size-5 text-primary" />
          Study Notes by Chapter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className={`glass-card glass-card-hover rounded-xl p-5 border ${ch.bg} text-left transition-all duration-200 hover:-translate-y-0.5 group`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`flex items-center justify-center size-10 rounded-lg ${ch.bg} border ${ch.bg.split(" ")[1]}`}>
                  <ch.icon className={`size-5 ${ch.color}`} />
                </div>
                <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded">
                  Ch.{ch.id}
                </span>
              </div>
              <h3 className={`text-sm font-semibold ${ch.color} mb-1`}>{ch.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{ch.questions} exam questions</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                <span>Study now</span>
                <ArrowRight className="size-3" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="glass-card rounded-2xl p-6 border">
        <h2 className="text-base font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="size-5 text-orange-400" />
          Exam Strategy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { step: "01", title: "Review Study Notes", desc: "Read all 8 chapter notes. Focus on key terms, formulas, and highlighted concepts.", color: "text-cyan-400" },
            { step: "02", title: "Learn the Formulas", desc: "Memorize EVM formulas (CPI, SPI, EAC, ETC, TCPI), PERT formula, NPV, and CPM rules.", color: "text-primary" },
            { step: "03", title: "Take Mock Exam", desc: "Complete all 100 questions. Review explanations for every wrong answer. Score 60%+ to pass.", color: "text-emerald-400" },
          ].map((tip) => (
            <div key={tip.step} className="flex gap-3">
              <span className={`text-2xl font-bold ${tip.color} font-mono opacity-40 shrink-0`}>{tip.step}</span>
              <div>
                <p className={`text-sm font-semibold ${tip.color} mb-1`}>{tip.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
