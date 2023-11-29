import { configurationController } from '@/config/infrastructure/configuration-controller';
import { repositoryController } from '@/dashboard/infrastructure/repository-controller';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function GET() {
  try {
    const repos = await repositoryController.getRepos({ query: '' });
    return NextResponse.json(repos);
  } catch (error) {
    return NextResponse.json(
      { message: 'There was and error getting the repos' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const json: NewRepository = await req.json();

  try {
    const { rootPath } = await configurationController.getConfig();
    const newRepo = { ...json, path: `${rootPath}/${json.name}` };
    const created = await repositoryController.createRepo(newRepo);
    return NextResponse.json(created);
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.issues.map((er) => ({
        field: er.path.join(','),
        error: er.message,
      }));
      return NextResponse.json(errors, { status: 403 });
    }

    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
