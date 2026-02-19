export type ProjectStatus = 'planning' | 'in_progress' | 'completed' | 'at_risk' | 'paused';
export type Priority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type Trend = 'up' | 'down' | 'stable';

export interface Project {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  priority: Priority;
  progress: number;
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  manager: string;
  team: string[];
  description: string;
  tags: string[];
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  status: TaskStatus;
  assignee: string;
  dueDate: string;
  priority: Priority;
}

export interface MonthlyMetric {
  id: string;
  month: string;
  revenue: number;
  costs: number;
  projects: number;
  satisfaction: number;
}

export interface KPI {
  id: string;
  label: string;
  value: number;
  prev: number;
  unit: 'BRL' | 'count' | 'percent';
  trend: Trend;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  projects: number;
  utilization: number;
}
