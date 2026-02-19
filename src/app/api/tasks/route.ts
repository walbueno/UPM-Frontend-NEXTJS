import { NextResponse } from 'next/server';
import { tasks } from '@/core/data/mockData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const projectId = searchParams.get('projectId');

  const result = projectId
    ? tasks.filter(t => t.projectId === projectId)
    : tasks;

  return NextResponse.json(result);
}
