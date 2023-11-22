import { configurationController } from '@/config/infrastructure/configuration-controller';
import { repositoryController } from '@/dashboard/infrastructure/repository-controller';
import { NextResponse } from 'next/server';

export async function DELETE(
  _req: any,
  { params }: { params: { name: string } }
) {
  const repoName = params.name;
  if (repoName === '')
    return NextResponse.json(
      { message: 'This action is forbidden' },
      { status: 403 }
    );
  const { rootPath } = configurationController.getConfig();
  const repoToDelete = `${rootPath}/${repoName}`;
  const deleted = repositoryController.deleteRepo(repoToDelete);
  return NextResponse.json(deleted);
}
