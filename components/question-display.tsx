'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Flag } from 'lucide-react';

interface Question {
  id: number;
  chapter: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuestionDisplayProps {
  question: Question;
  questionNumber: number;
  selectedAnswer?: number;
  onSelectAnswer: (optionIndex: number) => void;
  onToggleFlag: () => void;
  isFlagged: boolean;
}

const optionLetters = ['A', 'B', 'C', 'D'];
const optionColors = [
  'hover:border-cyan-500/50 hover:bg-cyan-500/5',
  'hover:border-blue-500/50 hover:bg-blue-500/5',
  'hover:border-teal-500/50 hover:bg-teal-500/5',
  'hover:border-indigo-500/50 hover:bg-indigo-500/5',
];

export function QuestionDisplay({
  question,
  questionNumber,
  selectedAnswer,
  onSelectAnswer,
  onToggleFlag,
  isFlagged,
}: QuestionDisplayProps) {
  return (
    <div className="glass-card p-6 rounded-lg flex flex-col gap-4 flex-1 overflow-auto">
      {/* Chapter tag */}
      <div className="flex items-start justify-between gap-4">
        <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40">
          <span className="text-xs font-semibold text-cyan-300">
            {question.chapter}
          </span>
        </div>
        <button
          onClick={onToggleFlag}
          className="p-1.5 rounded hover:bg-slate-700/50 transition-colors"
          title={isFlagged ? 'Unflag question' : 'Flag for review'}
        >
          <Flag
            className={`size-5 ${
              isFlagged ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'
            }`}
          />
        </button>
      </div>

      {/* Question text */}
      <div>
        <h3 className="text-lg font-semibold text-balance leading-relaxed">
          {question.text}
        </h3>
      </div>

      <Separator className="bg-slate-700/50" />

      {/* Answer options */}
      <div className="space-y-2">
        {question.options.map((option, idx) => {
          const isSelected = selectedAnswer === idx;
          const bgClass = isSelected
            ? 'bg-cyan-500/20 border-cyan-500/60'
            : 'bg-slate-800/40 border-slate-700/50';

          return (
            <button
              key={idx}
              onClick={() => onSelectAnswer(idx)}
              className={`w-full text-left p-4 rounded-lg border transition-all ${bgClass} ${
                optionColors[idx]
              }`}
            >
              <div className="flex gap-3">
                <div
                  className={`size-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-semibold text-sm ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-500/30 text-cyan-300'
                      : 'border-slate-600 text-slate-400'
                  }`}
                >
                  {optionLetters[idx]}
                </div>
                <span
                  className={`pt-1 ${
                    isSelected ? 'text-foreground font-medium' : 'text-slate-300'
                  }`}
                >
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answer) */}
      {selectedAnswer !== undefined && (
        <>
          <Separator className="bg-slate-700/50" />
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-4">
            <p className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
              Explanation
            </p>
            <p className="text-sm text-slate-200 leading-relaxed">
              {question.explanation}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
