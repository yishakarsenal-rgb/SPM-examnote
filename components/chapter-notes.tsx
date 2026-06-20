"use client"

import { useState } from "react"
import {
  BookOpen, Calendar, DollarSign, Users, AlertTriangle, CheckCircle,
  GitMerge, Target, ChevronDown, ChevronRight, Info, Tag
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { studyNotes, type ChapterNote } from "@/lib/study-notes"

const chapterIcons: Record<number, React.ComponentType<{ className?: string }>> = {
  1: BookOpen, 2: GitMerge, 3: Target, 4: Calendar,
  5: DollarSign, 6: Users, 7: AlertTriangle, 8: CheckCircle
}

const chapterColors: Record<number, string> = {
  1: "text-cyan-400", 2: "text-blue-400", 3: "text-teal-400", 4: "text-violet-400",
  5: "text-emerald-400", 6: "text-orange-400", 7: "text-red-400", 8: "text-cyan-300"
}

const chapterBorders: Record<number, string> = {
  1: "border-cyan-500/20", 2: "border-blue-500/20", 3: "border-teal-500/20", 4: "border-violet-500/20",
  5: "border-emerald-500/20", 6: "border-orange-500/20", 7: "border-red-500/20", 8: "border-cyan-400/20"
}

interface ChapterNotesProps {
  chapterNumber: number
}

export function ChapterNotes({ chapterNumber }: ChapterNotesProps) {
  const [activeTab, setActiveTab] = useState<"notes" | "terms">("notes")
  const note = studyNotes.find((n) => n.chapter === chapterNumber)

  if (!note) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        Chapter not found.
      </div>
    )
  }

  const Icon = chapterIcons[chapterNumber]
  const color = chapterColors[chapterNumber]
  const border = chapterBorders[chapterNumber]

  return (
    <div className="flex flex-col gap-6">
      {/* Chapter Header */}
      <div className={cn("glass-card rounded-2xl p-6 border", border)}>
        <div className="flex items-start gap-4">
          <div className={cn("flex items-center justify-center size-12 rounded-xl border shrink-0", border, "bg-white/5")}>
            <Icon className={cn("size-6", color)} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className={cn("text-xs border", color, border)}>
                Chapter {chapterNumber}
              </Badge>
              <Badge variant="secondary" className="text-xs text-muted-foreground">
                {note.sections.length} sections
              </Badge>
              <Badge variant="secondary" className="text-xs text-muted-foreground">
                {note.keyTerms.length} key terms
              </Badge>
            </div>
            <h1 className={cn("text-2xl font-bold text-balance", color)}>{note.title}</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-5 p-1 bg-white/5 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("notes")}
            className={cn(
              "px-4 py-1.5 text-sm rounded-md transition-all duration-200",
              activeTab === "notes"
                ? "bg-primary/20 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="flex items-center gap-1.5">
              <Info className="size-3.5" />
              Study Notes
            </span>
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={cn(
              "px-4 py-1.5 text-sm rounded-md transition-all duration-200",
              activeTab === "terms"
                ? "bg-primary/20 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="flex items-center gap-1.5">
              <Tag className="size-3.5" />
              Key Terms ({note.keyTerms.length})
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "notes" ? (
        <Accordion type="multiple" defaultValue={note.sections.map((_, i) => `section-${i}`)} className="flex flex-col gap-3">
          {note.sections.map((section, i) => (
            <AccordionItem
              key={i}
              value={`section-${i}`}
              className={cn("glass-card border rounded-xl overflow-hidden", border)}
            >
              <AccordionTrigger className={cn(
                "px-5 py-4 text-sm font-semibold hover:no-underline hover:bg-white/5 transition-colors",
                color
              )}>
                <span className="flex items-center gap-2 text-left">
                  <ChevronRight className={cn("size-4 transition-transform duration-200 shrink-0 data-[state=open]:rotate-90", color)} />
                  {section.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                {section.highlight && (
                  <div className={cn(
                    "mb-4 p-4 rounded-lg border-l-2 bg-primary/5",
                    "border-l-primary"
                  )}>
                    <p className="text-sm font-medium text-primary">{section.highlight}</p>
                  </div>
                )}
                <ul className="flex flex-col gap-2.5 mb-4">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className={cn("size-1.5 rounded-full mt-2 shrink-0", color.replace("text-", "bg-"))} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {section.calculations && section.calculations.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-3">
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">Calculation Examples</p>
                    {section.calculations.map((calc, j) => (
                      <div key={j} className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-3 space-y-2">
                        <div className="text-xs font-mono text-cyan-300 bg-slate-800/50 p-2 rounded border border-cyan-500/20">
                          {calc.formula}
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">{calc.example}</p>
                        {calc.result && (
                          <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 w-fit">
                            Result: {calc.result}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {note.keyTerms.map((term, i) => (
            <div
              key={i}
              className={cn("glass-card rounded-xl p-4 border", border)}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  "flex items-center justify-center size-6 rounded text-xs font-bold shrink-0 mt-0.5",
                  "bg-primary/10 text-primary"
                )}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn("text-sm font-semibold mb-1", color)}>{term.term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{term.definition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// All Chapters Overview component
export function AllNotesOverview({ onSelectChapter }: { onSelectChapter: (id: number) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Study Notes</h1>
        <p className="text-sm text-muted-foreground">Select a chapter to begin studying</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {studyNotes.map((note) => {
          const Icon = chapterIcons[note.chapter]
          const color = chapterColors[note.chapter]
          const border = chapterBorders[note.chapter]
          return (
            <button
              key={note.chapter}
              onClick={() => onSelectChapter(note.chapter)}
              className={cn(
                "glass-card glass-card-hover rounded-xl p-5 border text-left transition-all duration-200 hover:-translate-y-0.5",
                border
              )}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={cn("flex items-center justify-center size-10 rounded-lg border", border, "bg-white/5")}>
                  <Icon className={cn("size-5", color)} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Chapter {note.chapter}</p>
                  <p className={cn("text-sm font-semibold", color)}>{note.title}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {note.sections.length} sections
                </Badge>
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {note.keyTerms.length} terms
                </Badge>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
