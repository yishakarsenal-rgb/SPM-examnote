'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { examQuestions } from '@/lib/exam-questions';
import { RotateCcw, Home, CheckCircle, XCircle } from 'lucide-react';

interface ScoreCardProps {
  score: number;
  total: number;
  timeSpent: number;
  onRetake: () => void;
  answers: { [key: number]: number };
}

export function ScoreCard({
  score,
  total,
  timeSpent,
  onRetake,
  answers,
}: ScoreCardProps) {
  const percentage = (score / total) * 100;
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  // Score interpretation
  let statusLabel = '';
  let statusColor = '';
  if (percentage >= 80) {
    statusLabel = 'Excellent! You are well-prepared.';
    statusColor = 'text-emerald-400';
  } else if (percentage >= 70) {
    statusLabel = 'Good! Review weak areas.';
    statusColor = 'text-cyan-400';
  } else if (percentage >= 60) {
    statusLabel = 'Passing. More study needed.';
    statusColor = 'text-yellow-400';
  } else {
    statusLabel = 'Keep practicing. Focus on fundamentals.';
    statusColor = 'text-red-400';
  }

  // Group by chapter
  const byChapter: { [key: string]: { correct: number; total: number } } = {};
  examQuestions.forEach((q, idx) => {
    if (!byChapter[q.chapter]) {
      byChapter[q.chapter] = { correct: 0, total: 0 };
    }
    byChapter[q.chapter].total++;
    if (answers[idx] === q.correctAnswer) {
      byChapter[q.chapter].correct++;
    }
  });

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto py-8 px-4">
      {/* Main score display */}
      <div className="glass-card p-8 rounded-lg text-center neon-border">
        <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
          Exam Results
        </p>
        <div className="mb-6">
          <div className="text-7xl font-bold neon-glow mb-2">
            {score}/{total}
          </div>
          <p className={`text-2xl font-semibold ${statusColor}`}>
            {percentage.toFixed(1)}%
          </p>
        </div>
        <p className={`text-lg ${statusColor} mb-4`}>{statusLabel}</p>
        <Separator className="bg-slate-700/50 my-4" />
        <div className="text-sm text-muted-foreground">
          Time: {minutes}m {seconds}s
        </div>
      </div>

      {/* Performance by chapter */}
      <div className="glass-card p-6 rounded-lg space-y-4">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Performance by Chapter
        </p>
        <div className="space-y-3">
          {Object.entries(byChapter).map(([chapter, stats]) => {
            const chapterPercent = (stats.correct / stats.total) * 100;
            return (
              <div key={chapter} className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">{chapter}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {stats.correct}/{stats.total}
                    </span>
                    <span className="text-xs font-semibold neon-text">
                      {chapterPercent.toFixed(0)}%
                    </span>
                  </div>
                </div>
                <Progress value={chapterPercent} className="h-2" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Review incorrect */}
      <div className="glass-card p-6 rounded-lg">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Questions to Review
        </p>
        <div className="space-y-2">
          {examQuestions.map((q, idx) => {
            const correct = answers[idx] === q.correctAnswer;
            if (correct) return null;

            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-slate-800/40 border border-slate-700/50 rounded-lg"
              >
                <XCircle className="size-4 text-red-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground line-clamp-2">
                    {q.text}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {q.chapter}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
        <Button
          size="lg"
          className="bg-cyan-600 hover:bg-cyan-500 text-white gap-2"
          onClick={onRetake}
        >
          <RotateCcw className="size-5" />
          Retake Exam
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="glass-card-hover neon-border gap-2"
          onClick={() => window.location.href = '/'}
        >
          <Home className="size-5" />
          Back to Home
        </Button>
      </div>

      {/* Stats footer */}
      <div className="text-center text-xs text-muted-foreground">
        <p>Master Software Project Management through practice and review.</p>
        <p className="mt-1">Good luck on your SPM certification exam! 🚀</p>
      </div>
    </div>
  );
}
