import { NextResponse } from 'next/server';
import { metrics } from '@/core/data/mockData';

export async function GET() {
  return NextResponse.json(metrics);
}
