import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const vinyls = await prisma.vinyl.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(vinyls);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch vinyls" }, { status: 500 });
  }
}
