import Link from 'next/link';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { Project } from '@/core/types';
import { formatCurrency, calcBudgetPercent, getDaysRemaining, statusConfig, priorityConfig } from '@/core/utils';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { Card } from '../ui/Card';

function statusToBadgeVariant(status: Project['status']) {
  const map = {
    planning: 'info',
    in_progress: 'warning',
    completed: 'success',
    at_risk: 'danger',
    paused: 'neutral',
  } as const;
  return map[status];
}

function priorityToBadgeVariant(priority: Project['priority']) {
  const map = { high: 'danger', medium: 'warning', low: 'success' } as const;
  return map[priority];
}

export function ProjectCard({ project }: { project: Project }) {
  const daysLeft = getDaysRemaining(project.endDate);
  const budgetUsed = calcBudgetPercent(project.spent, project.budget);
  const sc = statusConfig[project.status];
  const budgetColor = budgetUsed > 90 ? 'red' : budgetUsed > 70 ? 'amber' : 'violet';

  return (
    <Card hover className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white text-sm leading-snug truncate">{project.name}</h3>
          <p className="text-xs text-zinc-500 mt-0.5">{project.client}</p>
        </div>
        <Badge variant={statusToBadgeVariant(project.status)}>{sc.label}</Badge>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-zinc-500 mb-1.5">
          <span>Progresso</span>
          <span className="tabular-nums">{project.progress}%</span>
        </div>
        <ProgressBar value={project.progress} color={project.progress === 100 ? 'emerald' : 'violet'} />
      </div>

      {/* Budget */}
      <div>
        <div className="flex justify-between text-xs text-zinc-500 mb-1.5">
          <span>Orçamento ({budgetUsed}%)</span>
          <span className="tabular-nums">{formatCurrency(project.spent)} / {formatCurrency(project.budget)}</span>
        </div>
        <ProgressBar value={budgetUsed} color={budgetColor} />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.05]">
        <div className="flex items-center gap-3 text-xs text-zinc-600">
          <span className="flex items-center gap-1">
            <Users size={11} />
            {project.team.length} pessoas
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {daysLeft > 0 ? `${daysLeft}d restantes` : 'Prazo vencido'}
          </span>
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors"
        >
          Ver <ArrowRight size={11} />
        </Link>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] text-zinc-600 bg-white/[0.03] border border-white/[0.05] px-1.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
        <Badge variant={priorityToBadgeVariant(project.priority)} className="ml-auto">
          {priorityConfig[project.priority].label}
        </Badge>
      </div>
    </Card>
  );
}
