import { projects, tasks, metrics, kpis, team } from '../data/mockData';
import type { Project, Task, MonthlyMetric, KPI, TeamMember } from '../types';

// Dados servidos diretamente pelo módulo — funciona na Vercel sem servidor externo.
// Para integrar com a API .NET C#, substitua cada função por um fetch real apontando
// para NEXT_PUBLIC_API_URL.

export const api = {
  projects: {
    list: async (): Promise<Project[]> => projects,
    get: async (id: string): Promise<Project | undefined> =>
      projects.find(p => p.id === id),
  },
  tasks: {
    list: async (): Promise<Task[]> => tasks,
    byProject: async (projectId: string): Promise<Task[]> =>
      tasks.filter(t => t.projectId === projectId),
  },
  metrics: {
    monthly: async (): Promise<MonthlyMetric[]> => metrics,
    kpis: async (): Promise<KPI[]> => kpis,
  },
  team: {
    list: async (): Promise<TeamMember[]> => team,
  },
};
