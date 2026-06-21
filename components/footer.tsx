import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background to-transparent pt-8 pb-4">
      <Separator className="mb-4 bg-slate-700/30" />
      <div className="px-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-xs text-muted-foreground tracking-wide">
          SPM Exam Preparation Platform
        </div>
        <div className="text-xs text-slate-500 font-light">
          Developed by <span className="text-slate-400 font-medium">Yishak</span>
        </div>
      </div>
    </footer>
  );
}
