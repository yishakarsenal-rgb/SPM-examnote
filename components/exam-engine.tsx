'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { examQuestions } from '@/lib/exam-questions';
import { QuestionDisplay } from './question-display';
import { ScoreCard } from './score-card';
import { Calculator } from './calculator';
import { Clock, Flag, RotateCcw, Calculator as CalculatorIcon } from 'lucide-react';

type Answer = { [key: number]: number };
type Flagged = Set<number>;

// Map exam questions to QuestionDisplay format
const mappedQuestions = examQuestions.map((q) => ({
  id: q.id,
  chapter: `Ch.${q.chapter}: ${q.topic}`,
  text: q.question,
  options: q.options,
  correctAnswer: q.answer,
  explanation: q.explanation,
}));

export function ExamEngine() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [flagged, setFlagged] = useState<Flagged>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes
  const [isExamComplete, setIsExamComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  // Timer
  useEffect(() => {
    if (isExamComplete || timeRemaining <= 0) return;
    const timer = setInterval(() => {
      setTimeRemaining((t) => {
        if (t <= 1) {
          setIsExamComplete(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isExamComplete]);

  const handleSelectAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const handleToggleFlag = () => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(currentQuestion)) {
        next.delete(currentQuestion);
      } else {
        next.add(currentQuestion);
      }
      return next;
    });
  };

  const handleSubmitExam = () => {
    let correctCount = 0;
    examQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setIsExamComplete(true);
  };

  const handleResetExam = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setFlagged(new Set());
    setTimeRemaining(3600);
    setIsExamComplete(false);
    setScore(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((currentQuestion + 1) / examQuestions.length) * 100;
  const answered = Object.keys(answers).length;

  if (isExamComplete) {
    return (
      <ScoreCard
        score={score}
        total={mappedQuestions.length}
        timeSpent={3600 - timeRemaining}
        onRetake={handleResetExam}
        answers={answers}
      />
    );
  }

  const question = mappedQuestions[currentQuestion];
  const isAnswered = currentQuestion in answers;
  const isFlagged = flagged.has(currentQuestion);

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Header with timer and progress */}
      <div className="glass-card p-4 rounded-lg">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Clock className="size-5 neon-text" />
            <span className="text-sm font-mono">
              {formatTime(timeRemaining)}
            </span>
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-muted-foreground">
                Question {currentQuestion + 1} / {examQuestions.length}
              </span>
              <span className="text-xs neon-text">
                {answered} answered
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="neon-border">
              {answered}/{examQuestions.length}
            </Badge>
            {isFlagged && (
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400">
                Flagged
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Main content: Question + Navigation */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Question display */}
        <div className="flex-1 flex flex-col gap-4 min-w-0">
          <QuestionDisplay
            question={question}
            questionNumber={currentQuestion + 1}
            selectedAnswer={answers[currentQuestion]}
            onSelectAnswer={handleSelectAnswer}
            onToggleFlag={handleToggleFlag}
            isFlagged={isFlagged}
          />

          {/* Action buttons */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              className="glass-card-hover neon-border"
              onClick={handleToggleFlag}
            >
              <Flag className="size-4 mr-2" />
              {isFlagged ? 'Unflag' : 'Flag'}
            </Button>
            <div className="flex-1" />
            <Button
              variant="outline"
              size="sm"
              className="glass-card-hover neon-border"
              onClick={() => setCalculatorOpen(true)}
            >
              <CalculatorIcon className="size-4 mr-1.5" />
              Calculator
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={currentQuestion === 0}
              className="glass-card-hover neon-border"
              onClick={() => setCurrentQuestion((p) => p - 1)}
            >
              Previous
            </Button>
            {currentQuestion < examQuestions.length - 1 ? (
              <Button
                size="sm"
                className="bg-cyan-600 hover:bg-cyan-500 text-white"
                onClick={() => setCurrentQuestion((p) => p + 1)}
              >
                Next
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-500 text-white"
                onClick={handleSubmitExam}
              >
                Submit Exam
              </Button>
            )}
          </div>
        </div>

        {/* Question Navigator Panel */}
        <div className="hidden lg:flex flex-col gap-2 w-48">
          <div className="glass-card p-3 rounded-lg">
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Question Navigator
            </p>
            <ScrollArea className="h-96">
              <div className="grid grid-cols-4 gap-1 pr-4">
                {examQuestions.map((_, idx) => {
                  const isCurrentQ = idx === currentQuestion;
                  const hasAnswer = idx in answers;
                  const isFlaggedQ = flagged.has(idx);

                  let classes =
                    'size-8 rounded text-xs font-semibold cursor-pointer transition-all flex items-center justify-center ';

                  if (isCurrentQ) {
                    classes += 'q-current';
                  } else if (isFlaggedQ && hasAnswer) {
                    classes += 'bg-yellow-500/30 border border-yellow-500/60 text-yellow-400';
                  } else if (isFlaggedQ) {
                    classes += 'q-flagged';
                  } else if (hasAnswer) {
                    classes += 'q-answered';
                  } else {
                    classes += 'q-unanswered';
                  }

                  return (
                    <button
                      key={idx}
                      className={classes}
                      onClick={() => setCurrentQuestion(idx)}
                      title={`Question ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </div>

          <div className="glass-card p-3 rounded-lg text-xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="size-3 bg-cyan-500 rounded" />
              <span className="text-muted-foreground">Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-yellow-500 rounded" />
              <span className="text-muted-foreground">Flagged</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 bg-slate-600 rounded" />
              <span className="text-muted-foreground">Unanswered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Modal */}
      <Calculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </div>
  );
}
