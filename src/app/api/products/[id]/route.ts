import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const vinyl = await prisma.vinyl.findUnique({
      where: { id }
    });

    if (!vinyl) {
      return NextResponse.json({ error: 'Vinyl not found' }, { status: 404 });
    }

    return NextResponse.json(vinyl);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch vinyl" }, { status: 500 });
  }
}
