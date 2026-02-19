'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  BarChart3,
  Users,
  Settings,
  Zap,
} from 'lucide-react';
import { cn } from '@/core/utils';

const nav = [
  { href: '/',          label: 'Visão Geral',  icon: LayoutDashboard },
  { href: '/projects',  label: 'Projetos',     icon: FolderKanban },
  { href: '/metrics',   label: 'Métricas',     icon: BarChart3 },
  { href: '/team',      label: 'Time',         icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-[#080a0f] border-r border-white/[0.05] flex flex-col z-50">
      {/* Logo */}
      <div className="px-6 py-7 flex items-center gap-2.5">
        <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
          <Zap size={16} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-white tracking-tight">UPM</p>
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Dashboard</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5">
        <p className="text-[10px] text-zinc-700 uppercase tracking-widest px-3 mb-3 mt-2">Menu</p>
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150',
                active
                  ? 'bg-violet-600/15 text-violet-400 font-medium'
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04]'
              )}
            >
              <Icon size={16} className={active ? 'text-violet-400' : ''} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-6">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-600 hover:text-zinc-300 hover:bg-white/[0.04] transition-all"
        >
          <Settings size={16} />
          Configurações
        </Link>
        <div className="mt-4 px-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-xs font-bold text-white">
              W
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-300">Walbueno</p>
              <p className="text-[10px] text-zinc-600">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
