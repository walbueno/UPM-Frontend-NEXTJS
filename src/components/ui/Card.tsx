import { cn } from '@/core/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div className={cn(
      'bg-[#0f1117] border border-white/[0.06] rounded-2xl p-6',
      hover && 'transition-all duration-200 hover:border-white/[0.12] hover:bg-[#13151f]',
      className
    )}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-sm font-medium text-zinc-400 uppercase tracking-widest', className)}>
      {children}
    </h3>
  );
}
