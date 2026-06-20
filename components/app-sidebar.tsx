"use client"

import { useState } from "react"
import {
  BookOpen, Calendar, DollarSign, Users, AlertTriangle, CheckCircle,
  GitMerge, Target, FlaskConical, Home, ChevronLeft, ChevronRight,
  GraduationCap, Menu, X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

interface AppSidebarProps {
  onSelectChapter: (chapterNum: number) => void
  onStartExam: () => void
}

const chapterIcons = {
  1: BookOpen, 2: GitMerge, 3: Target, 4: Calendar,
  5: DollarSign, 6: Users, 7: AlertTriangle, 8: CheckCircle
}

const chapterColors = {
  1: "text-cyan-400", 2: "text-blue-400", 3: "text-teal-400", 4: "text-violet-400",
  5: "text-emerald-400", 6: "text-orange-400", 7: "text-red-400", 8: "text-cyan-300"
}

const chapters = [
  { id: 1, title: "Introduction to SPM" },
  { id: 2, title: "Integration Management" },
  { id: 3, title: "Scope Management" },
  { id: 4, title: "Schedule Management" },
  { id: 5, title: "Cost Management" },
  { id: 6, title: "HR Management" },
  { id: 7, title: "Risk Management" },
  { id: 8, title: "Quality Management" },
]

export function AppSidebar({ onSelectChapter, onStartExam }: AppSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const NavItem = ({
    icon: Icon, label, onClick, color = "text-muted-foreground", extraClasses = ""
  }: {
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick: () => void
    color?: string
    extraClasses?: string
  }) => {
    return (
      <button
        onClick={() => {
          onClick()
          setMobileOpen(false)
        }}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left hover:bg-white/5 text-muted-foreground hover:text-foreground",
          extraClasses
        )}
      >
        <Icon className={cn("shrink-0 size-4", color)} />
        {!collapsed && (
          <span className="text-sm truncate">{label}</span>
        )}
      </button>
    )
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={cn(
        "flex items-center gap-3 px-4 py-5 border-b border-border/50",
        collapsed ? "justify-center px-2" : ""
      )}>
        <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
          <GraduationCap className="size-5 text-primary" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate neon-text">SPM ExamPrep</p>
            <p className="text-xs text-muted-foreground truncate">Software Project Mgmt</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-3">
        <nav aria-label="Main navigation">
          {/* Main */}
          {!collapsed && (
            <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1">
              Main
            </p>
          )}
          <div className="flex flex-col gap-0.5 mb-4">
            <NavItem icon={Home} label="Dashboard" onClick={() => window.location.href = '/'} />
            <NavItem icon={FlaskConical} label="Mock Exam (100Q)" onClick={onStartExam} color="text-primary" />
          </div>

          {/* Chapters */}
          {!collapsed && (
            <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-1">
              Study Notes
            </p>
          )}
          {collapsed && <div className="h-px bg-border/50 my-2 mx-1" />}
          <div className="flex flex-col gap-0.5">
            {chapters.map((ch) => {
              const Icon = chapterIcons[ch.id as keyof typeof chapterIcons]
              const color = chapterColors[ch.id as keyof typeof chapterColors]
              return (
                <NavItem
                  key={ch.id}
                  icon={Icon}
                  label={`Ch.${ch.id}: ${ch.title}`}
                  onClick={() => onSelectChapter(ch.id)}
                  color={color}
                />
              )
            })}
          </div>
        </nav>
      </ScrollArea>

      {/* Collapse button */}
      <div className="p-2 border-t border-border/50">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground text-sm"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="size-4" /> : (
            <>
              <ChevronLeft className="size-4" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden glass-card p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full z-50 bg-background/95 backdrop-blur-xl border-r border-border/50 transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "w-64"
        )}
        aria-label="Mobile navigation"
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col h-screen sticky top-0 bg-card/50 backdrop-blur-xl border-r border-border/50 transition-all duration-300 shrink-0 z-10",
          collapsed ? "w-16" : "w-64"
        )}
        aria-label="Desktop navigation"
      >
        <SidebarContent />
      </aside>
    </>
  )
}
