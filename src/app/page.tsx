import { api } from '@/core/services/api';
import { KpiCard } from '@/components/ui/KpiCard';
import { ProjectCard } from '@/components/project/ProjectCard';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { SatisfactionChart } from '@/components/charts/SatisfactionChart';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { statusConfig } from '@/core/utils';
import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [kpis, metrics, projects, team] = await Promise.all([
    api.metrics.kpis(),
    api.metrics.monthly(),
    api.projects.list(),
    api.team.list(),
  ]);

  const atRisk = projects.filter(p => p.status === 'at_risk');
  const inProgress = projects.filter(p => p.status === 'in_progress');
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="px-8 py-8 max-w-[1400px]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Dashboard</span>
          <span className="text-zinc-700">/</span>
          <span className="text-xs text-violet-400 uppercase tracking-widest">Visão Geral</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Bom dia, Walbueno 👋</h1>
        <p className="text-sm text-zinc-500 mt-1">
          {inProgress.length} projetos em andamento · {atRisk.length > 0 && <span className="text-red-400">{atRisk.length} em risco</span>}
        </p>
      </div>

      {/* Alerts */}
      {atRisk.length > 0 && (
        <div className="mb-6 flex items-center gap-3 bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-3">
          <AlertTriangle size={14} className="text-red-400 shrink-0" />
          <p className="text-sm text-red-300">
            <strong>{atRisk[0].name}</strong> está em risco — orçamento ou prazo crítico.
          </p>
          <Link href="/projects" className="ml-auto text-xs text-red-400 hover:text-red-300 flex items-center gap-1">
            Ver <ArrowRight size={11} />
          </Link>
        </div>
      )}

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {kpis.map(kpi => <KpiCard key={kpi.id} kpi={kpi} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Receita vs Custos</CardTitle>
            <Badge variant="neutral">Últimos 6 meses</Badge>
          </CardHeader>
          <RevenueChart data={metrics} />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Satisfação Clientes</CardTitle>
          </CardHeader>
          <SatisfactionChart data={metrics} />
        </Card>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* Recent Projects */}
        <div className="col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-white">Projetos Recentes</h2>
            <Link href="/projects" className="text-xs text-violet-400 hover:text-violet-300 flex items-center gap-1">
              Ver todos <ArrowRight size={11} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {recentProjects.map(p => <ProjectCard key={p.id} project={p} />)}
            <Link
              href="/projects"
              className="border border-dashed border-white/[0.07] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-zinc-600 hover:text-zinc-400 hover:border-white/[0.12] transition-all"
            >
              <ArrowRight size={20} />
              <span className="text-xs">Ver todos os projetos</span>
            </Link>
          </div>
        </div>

        {/* Team Utilization */}
        <Card>
          <CardHeader>
            <CardTitle>Utilização do Time</CardTitle>
            <Badge variant="neutral">{team.length} pessoas</Badge>
          </CardHeader>
          <div className="space-y-4">
            {team.slice(0, 6).map(member => (
              <div key={member.id}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-[10px] font-bold text-white">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-zinc-300 leading-none">{member.name}</p>
                      <p className="text-[10px] text-zinc-600">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {member.utilization >= 90 && <AlertTriangle size={10} className="text-amber-400" />}
                    {member.utilization === 100 && <CheckCircle2 size={10} className="text-emerald-400" />}
                    <span className="text-xs text-zinc-500 tabular-nums">{member.utilization}%</span>
                  </div>
                </div>
                <ProgressBar
                  value={member.utilization}
                  color={member.utilization >= 90 ? 'amber' : 'violet'}
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
