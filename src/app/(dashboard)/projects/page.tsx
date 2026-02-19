import { api } from '@/core/services/api';
import { ProjectCard } from '@/components/project/ProjectCard';
import { Badge } from '@/components/ui/Badge';
import { ProjectStatus } from '@/core/types';

export const dynamic = 'force-dynamic';

const statusFilters: { label: string; value: ProjectStatus | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Em Andamento', value: 'in_progress' },
  { label: 'Planejamento', value: 'planning' },
  { label: 'Concluídos', value: 'completed' },
  { label: 'Em Risco', value: 'at_risk' },
];

export default async function ProjectsPage() {
  const projects = await api.projects.list();

  const counts = {
    all: projects.length,
    in_progress: projects.filter(p => p.status === 'in_progress').length,
    planning: projects.filter(p => p.status === 'planning').length,
    completed: projects.filter(p => p.status === 'completed').length,
    at_risk: projects.filter(p => p.status === 'at_risk').length,
  };

  const totalBudget = projects.reduce((s, p) => s + p.budget, 0);
  const totalSpent  = projects.reduce((s, p) => s + p.spent, 0);

  return (
    <div className="px-8 py-8 max-w-[1400px]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Dashboard</span>
          <span className="text-zinc-700">/</span>
          <span className="text-xs text-violet-400 uppercase tracking-widest">Projetos</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Projetos</h1>
            <p className="text-sm text-zinc-500 mt-1">{projects.length} projetos no portfólio</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-zinc-600 mb-1">Orçamento Total</p>
            <p className="text-lg font-bold text-white">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(totalBudget)}
            </p>
            <p className="text-xs text-zinc-500">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(totalSpent)} utilizados ({Math.round((totalSpent / totalBudget) * 100)}%)
            </p>
          </div>
        </div>
      </div>

      {/* Status Summary */}
      <div className="flex flex-wrap gap-2 mb-8">
        {statusFilters.slice(1).map(f => (
          <div key={f.value} className="bg-[#0f1117] border border-white/[0.06] rounded-xl px-4 py-2.5 flex items-center gap-2">
            <span className="text-xs text-zinc-500">{f.label}</span>
            <span className="text-sm font-bold text-white">{counts[f.value as keyof typeof counts]}</span>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
