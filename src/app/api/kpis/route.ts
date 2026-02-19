import { NextResponse } from 'next/server';
import { kpis } from '@/core/data/mockData';

export async function GET() {
  return NextResponse.json(kpis);
}
