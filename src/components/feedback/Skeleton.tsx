import { cn } from '@/core/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn(
      'animate-pulse bg-white/[0.05] rounded-lg',
      className
    )} />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-[#0f1117] border border-white/[0.06] rounded-2xl p-6 space-y-4">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-1.5 w-full" />
    </div>
  );
}
