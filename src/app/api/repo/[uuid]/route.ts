import { repositoryController } from '@/dashboard/infrastructure/repository-controller';
import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function DELETE(
  _req: any,
  { params }: { params: { uuid: string } }
) {
  const uuid = params.uuid;
  if (uuid === '')
    return NextResponse.json(
      { message: 'This action is forbidden' },
      { status: 403 }
    );
  try {
    const deleted = await repositoryController.deleteRepo(uuid);
    return NextResponse.json(deleted);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:19 ~ error:", error)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025')
        return NextResponse.json(
          { message: "This repo doesn't exits" },
          { status: 404 }
        );
    }
  }
}
