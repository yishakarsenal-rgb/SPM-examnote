'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Calculator({ isOpen, onClose }: CalculatorProps) {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberClick = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = performCalculation(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const performCalculation = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return prev / current;
      case '%':
        return prev * (current / 100);
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = parseFloat(display);
      const result = performCalculation(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  if (!isOpen) return null;

  const buttonClass =
    'h-12 rounded-lg font-semibold text-sm transition-all hover:scale-105 active:scale-95';
  const numberButtonClass = cn(buttonClass, 'bg-slate-700/50 text-white hover:bg-slate-700/70');
  const operationButtonClass = cn(buttonClass, 'bg-cyan-500/30 text-cyan-300 hover:bg-cyan-500/50');
  const equalsButtonClass = cn(buttonClass, 'bg-cyan-500 text-white hover:bg-cyan-600');

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Calculator Panel */}
      <div className="relative glass-card border border-cyan-500/30 rounded-2xl p-6 w-full md:w-80 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-cyan-400">SPM Calculator</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="size-5 text-gray-400" />
          </button>
        </div>

        {/* Display */}
        <div className="bg-slate-900/50 rounded-xl p-4 mb-4 border border-slate-700/50 text-right">
          <div className="text-gray-500 text-xs mb-1 h-4">
            {previousValue !== null && operation ? `${previousValue} ${operation}` : ''}
          </div>
          <div className="text-3xl font-mono font-bold text-cyan-300 break-words">
            {display}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {/* Row 1 */}
          <Button
            onClick={handleClear}
            className={cn(buttonClass, 'col-span-2 bg-red-500/30 text-red-300 hover:bg-red-500/50')}
          >
            Clear
          </Button>
          <Button
            onClick={handleBackspace}
            className={cn(buttonClass, 'bg-slate-700/50 text-white hover:bg-slate-700/70')}
          >
            ← Del
          </Button>
          <Button
            onClick={() => handleOperation('÷')}
            className={operationButtonClass}
          >
            ÷
          </Button>

          {/* Row 2 */}
          <Button onClick={() => handleNumberClick('7')} className={numberButtonClass}>
            7
          </Button>
          <Button onClick={() => handleNumberClick('8')} className={numberButtonClass}>
            8
          </Button>
          <Button onClick={() => handleNumberClick('9')} className={numberButtonClass}>
            9
          </Button>
          <Button
            onClick={() => handleOperation('×')}
            className={operationButtonClass}
          >
            ×
          </Button>

          {/* Row 3 */}
          <Button onClick={() => handleNumberClick('4')} className={numberButtonClass}>
            4
          </Button>
          <Button onClick={() => handleNumberClick('5')} className={numberButtonClass}>
            5
          </Button>
          <Button onClick={() => handleNumberClick('6')} className={numberButtonClass}>
            6
          </Button>
          <Button
            onClick={() => handleOperation('-')}
            className={operationButtonClass}
          >
            −
          </Button>

          {/* Row 4 */}
          <Button onClick={() => handleNumberClick('1')} className={numberButtonClass}>
            1
          </Button>
          <Button onClick={() => handleNumberClick('2')} className={numberButtonClass}>
            2
          </Button>
          <Button onClick={() => handleNumberClick('3')} className={numberButtonClass}>
            3
          </Button>
          <Button
            onClick={() => handleOperation('+')}
            className={operationButtonClass}
          >
            +
          </Button>

          {/* Row 5 */}
          <Button
            onClick={() => handleNumberClick('0')}
            className={cn(numberButtonClass, 'col-span-2')}
          >
            0
          </Button>
          <Button onClick={handleDecimal} className={numberButtonClass}>
            .
          </Button>
          <Button
            onClick={() => handleOperation('%')}
            className={operationButtonClass}
          >
            %
          </Button>
        </div>

        {/* Equals Button */}
        <Button
          onClick={handleEquals}
          className={cn(equalsButtonClass, 'w-full text-lg font-bold')}
        >
          =
        </Button>

        {/* Quick Formulas */}
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <p className="text-xs text-gray-400 mb-2 font-semibold">Quick Formulas:</p>
          <div className="grid grid-cols-1 gap-1 text-xs">
            <button
              className="text-left px-2 py-1 rounded bg-slate-700/30 hover:bg-slate-700/50 text-cyan-300 transition-colors"
              onClick={() => {
                setDisplay('=(Optimistic+4*MostLikely+Pessimistic)/6');
              }}
            >
              PERT: (O+4M+P)/6
            </button>
            <button
              className="text-left px-2 py-1 rounded bg-slate-700/30 hover:bg-slate-700/50 text-cyan-300 transition-colors"
              onClick={() => {
                setDisplay('CPI = EV/AC');
              }}
            >
              CPI: EV/AC
            </button>
            <button
              className="text-left px-2 py-1 rounded bg-slate-700/30 hover:bg-slate-700/50 text-cyan-300 transition-colors"
              onClick={() => {
                setDisplay('EAC = BAC/CPI');
              }}
            >
              EAC: BAC/CPI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
