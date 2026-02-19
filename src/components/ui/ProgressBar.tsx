import { cn } from '@/core/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  color?: 'violet' | 'emerald' | 'amber' | 'red' | 'blue';
  size?: 'sm' | 'md';
  showLabel?: boolean;
}

const colorMap = {
  violet:  'bg-violet-500',
  emerald: 'bg-emerald-500',
  amber:   'bg-amber-500',
  red:     'bg-red-500',
  blue:    'bg-blue-500',
};

export function ProgressBar({
  value,
  max = 100,
  className,
  color = 'violet',
  size = 'sm',
  showLabel = false,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn(
        'flex-1 bg-white/[0.05] rounded-full overflow-hidden',
        size === 'sm' ? 'h-1.5' : 'h-2.5'
      )}>
        <div
          className={cn('h-full rounded-full transition-all duration-700', colorMap[color])}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-zinc-500 tabular-nums w-8 text-right">{pct}%</span>
      )}
    </div>
  );
}
