import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ProjectStatus, Priority } from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function calcBudgetPercent(spent: number, budget: number): number {
  return Math.round((spent / budget) * 100);
}

export function getDaysRemaining(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export const statusConfig: Record<ProjectStatus, { label: string; color: string; bg: string }> = {
  planning:    { label: 'Planejamento', color: 'text-blue-400',   bg: 'bg-blue-400/10' },
  in_progress: { label: 'Em Andamento', color: 'text-amber-400',  bg: 'bg-amber-400/10' },
  completed:   { label: 'Concluído',    color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  at_risk:     { label: 'Em Risco',     color: 'text-red-400',    bg: 'bg-red-400/10' },
  paused:      { label: 'Pausado',      color: 'text-zinc-400',   bg: 'bg-zinc-400/10' },
};

export const priorityConfig: Record<Priority, { label: string; color: string }> = {
  high:   { label: 'Alta',  color: 'text-red-400' },
  medium: { label: 'Média', color: 'text-amber-400' },
  low:    { label: 'Baixa', color: 'text-emerald-400' },
};
