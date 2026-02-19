import { api } from '@/core/services/api';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { AlertTriangle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function TeamPage() {
  const team = await api.team.list();

  const avgUtil = Math.round(team.reduce((s, m) => s + m.utilization, 0) / team.length);
  const overloaded = team.filter(m => m.utilization >= 90);

  return (
    <div className="px-8 py-8 max-w-[1400px]">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Dashboard</span>
          <span className="text-zinc-700">/</span>
          <span className="text-xs text-violet-400 uppercase tracking-widest">Time</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Time</h1>
            <p className="text-sm text-zinc-500 mt-1">{team.length} colaboradores · Utilização média: {avgUtil}%</p>
          </div>
        </div>
      </div>

      {overloaded.length > 0 && (
        <div className="mb-6 flex items-center gap-3 bg-amber-500/5 border border-amber-500/20 rounded-xl px-4 py-3">
          <AlertTriangle size={14} className="text-amber-400 shrink-0" />
          <p className="text-sm text-amber-300">
            {overloaded.length} {overloaded.length === 1 ? 'colaborador está' : 'colaboradores estão'} com utilização acima de 90% — considere redistribuir tarefas.
          </p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        {team.map(member => (
          <Card key={member.id} hover>
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-lg font-bold text-white mb-3">
                {member.avatar}
              </div>
              <p className="font-semibold text-white text-sm">{member.name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{member.role}</p>
            </div>

            <div className="space-y-3 pt-3 border-t border-white/[0.05]">
              <div className="flex justify-between text-xs text-zinc-500">
                <span>Projetos</span>
                <span className="text-white font-medium">{member.projects}</span>
              </div>
              <div>
                <div className="flex justify-between text-xs text-zinc-500 mb-1.5">
                  <span>Utilização</span>
                  <span className={`font-medium tabular-nums ${member.utilization >= 90 ? 'text-amber-400' : 'text-white'}`}>
                    {member.utilization}%
                  </span>
                </div>
                <ProgressBar
                  value={member.utilization}
                  color={member.utilization >= 90 ? 'amber' : member.utilization >= 70 ? 'violet' : 'emerald'}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
