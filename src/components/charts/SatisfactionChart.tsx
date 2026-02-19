'use client';

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { MonthlyMetric } from '@/core/types';

export function SatisfactionChart({ data }: { data: MonthlyMetric[] }) {
  const chartData = data.map(d => ({ month: d.month, satisfaction: d.satisfaction, projects: d.projects * 10 }));

  return (
    <ResponsiveContainer width="100%" height={240}>
      <RadarChart data={chartData}>
        <PolarGrid stroke="rgba(255,255,255,0.06)" />
        <PolarAngleAxis dataKey="month" tick={{ fill: '#52525b', fontSize: 11 }} />
        <Tooltip
          contentStyle={{ background: '#0f1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }}
          labelStyle={{ color: '#a1a1aa' }}
        />
        <Radar name="Satisfação" dataKey="satisfaction" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.15} strokeWidth={2} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
