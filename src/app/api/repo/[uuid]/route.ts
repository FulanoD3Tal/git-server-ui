import { repositoryController } from '@/dashboard/infrastructure/repository-controller';
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
  const deleted = repositoryController.deleteRepo(uuid);
  return NextResponse.json(deleted);
}
