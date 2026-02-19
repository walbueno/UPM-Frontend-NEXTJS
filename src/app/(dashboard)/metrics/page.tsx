import { api } from '@/core/services/api';
import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { SatisfactionChart } from '@/components/charts/SatisfactionChart';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency, formatPercent } from '@/core/utils';

export const dynamic = 'force-dynamic';

export default async function MetricsPage() {
  const [metrics, kpis] = await Promise.all([
    api.metrics.monthly(),
    api.metrics.kpis(),
  ]);

  const totalRevenue = metrics.reduce((s, m) => s + m.revenue, 0);
  const totalCosts   = metrics.reduce((s, m) => s + m.costs, 0);
  const margin       = ((totalRevenue - totalCosts) / totalRevenue) * 100;
  const avgSat       = metrics.reduce((s, m) => s + m.satisfaction, 0) / metrics.length;

  return (
    <div className="px-8 py-8 max-w-[1400px]">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-zinc-600 uppercase tracking-widest">Dashboard</span>
          <span className="text-zinc-700">/</span>
          <span className="text-xs text-violet-400 uppercase tracking-widest">Métricas</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Métricas & KPIs</h1>
        <p className="text-sm text-zinc-500 mt-1">Desempenho financeiro e operacional dos últimos 6 meses</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <Card>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Receita Total (6m)</p>
          <p className="text-2xl font-bold text-white">{formatCurrency(totalRevenue)}</p>
        </Card>
        <Card>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Custos Totais (6m)</p>
          <p className="text-2xl font-bold text-white">{formatCurrency(totalCosts)}</p>
        </Card>
        <Card>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Margem Média</p>
          <p className="text-2xl font-bold text-emerald-400">{formatPercent(margin)}</p>
        </Card>
        <Card>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Satisfação Média</p>
          <p className="text-2xl font-bold text-violet-400">{avgSat.toFixed(1)}%</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Receita vs Custos por Mês</CardTitle>
            <Badge variant="neutral">2024</Badge>
          </CardHeader>
          <RevenueChart data={metrics} />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Satisfação por Mês</CardTitle>
          </CardHeader>
          <SatisfactionChart data={metrics} />
        </Card>
      </div>

      {/* Monthly Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detalhamento Mensal</CardTitle>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.05]">
                {['Mês', 'Receita', 'Custos', 'Lucro', 'Margem', 'Projetos', 'Satisfação'].map(h => (
                  <th key={h} className="text-left text-xs text-zinc-600 uppercase tracking-wider py-3 pr-6 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metrics.map(m => {
                const profit = m.revenue - m.costs;
                const marg   = (profit / m.revenue) * 100;
                return (
                  <tr key={m.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-6 font-medium text-white">{m.month}</td>
                    <td className="py-3 pr-6 text-zinc-300 tabular-nums">{formatCurrency(m.revenue)}</td>
                    <td className="py-3 pr-6 text-zinc-300 tabular-nums">{formatCurrency(m.costs)}</td>
                    <td className="py-3 pr-6 text-emerald-400 tabular-nums font-medium">{formatCurrency(profit)}</td>
                    <td className="py-3 pr-6 tabular-nums">
                      <span className={marg > 30 ? 'text-emerald-400' : marg > 20 ? 'text-amber-400' : 'text-red-400'}>
                        {formatPercent(marg)}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-zinc-300">{m.projects}</td>
                    <td className="py-3 pr-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium ${m.satisfaction >= 90 ? 'text-emerald-400' : m.satisfaction >= 80 ? 'text-amber-400' : 'text-red-400'}`}>
                          {m.satisfaction}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
