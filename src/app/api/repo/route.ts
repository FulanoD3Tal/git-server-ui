import { configurationController } from '@/config/infrastructure/configuration-controller';
import { repositoryController } from '@/dashboard/infrastructure/repository-controller';
import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('query') || '';
  try {
    const repos = await repositoryController.getRepos({ query });
    return NextResponse.json(repos);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:14 ~ GET ~ error:", error)
    return NextResponse.json(
      { message: 'There was and error getting the repos' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const json: NewRepository = await req.json();

  try {
    const { rootPath, defaultBranch } =
      await configurationController.getConfig();
    const newRepo = { ...json, path: `${rootPath}/${json.name}` };
    const created = await repositoryController.createRepo(
      newRepo,
      defaultBranch || ''
    );
    return NextResponse.json(created);
  } catch (error) {
    console.log("🚀 ~ file: route.ts:34 ~ POST ~ error:", error)
    if (error instanceof ZodError) {
      const errors = error.issues.map((er) => ({
        field: er.path.join(','),
        error: er.message,
      }));
      return NextResponse.json(errors, { status: 403 });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002')
        return NextResponse.json(
          { message: 'This repo already exits' },
          { status: 409 }
        );
      return NextResponse.json(
        { message: 'There was and error with the server, try later' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
