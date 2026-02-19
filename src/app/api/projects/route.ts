import { NextResponse } from 'next/server';
import { projects } from '@/core/data/mockData';

export async function GET() {
  return NextResponse.json(projects);
}
