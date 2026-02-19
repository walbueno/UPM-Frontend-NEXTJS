import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { KPI } from '@/core/types';
import { formatCurrency, formatPercent } from '@/core/utils';
import { Card } from './Card';

function formatValue(kpi: KPI): string {
  if (kpi.unit === 'BRL') return formatCurrency(kpi.value);
  if (kpi.unit === 'percent') return formatPercent(kpi.value);
  return String(kpi.value);
}

function calcChange(current: number, prev: number): string {
  const pct = ((current - prev) / prev) * 100;
  return `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%`;
}

interface KpiCardProps {
  kpi: KPI;
}

export function KpiCard({ kpi }: KpiCardProps) {
  const isUp = kpi.trend === 'up';
  const isDown = kpi.trend === 'down';

  return (
    <Card>
      <p className="text-xs text-zinc-500 uppercase tracking-widest mb-3">{kpi.label}</p>
      <p className="text-3xl font-bold text-white tabular-nums mb-3">{formatValue(kpi)}</p>
      <div className={`flex items-center gap-1.5 text-xs font-medium ${isUp ? 'text-emerald-400' : isDown ? 'text-red-400' : 'text-zinc-500'}`}>
        {isUp ? <TrendingUp size={13} /> : isDown ? <TrendingDown size={13} /> : <Minus size={13} />}
        <span>{calcChange(kpi.value, kpi.prev)} vs mês anterior</span>
      </div>
    </Card>
  );
}
