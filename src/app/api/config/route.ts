import { configurationController } from '@/config/infrastructure/configuration-controller';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function GET() {
  const config = configurationController.getConfig();
  if (!config)
    return NextResponse.json(
      { message: 'There was and error get it the configuration' },
      { status: 404 }
    );

  return NextResponse.json(config);
}

export async function POST(req: NextRequest) {
  const newConfig = await req.json();
  try {
    const saved = configurationController.setConfig(newConfig);
    if (!saved)
      return NextResponse.json(
        { message: 'There was and error get it the configuration' },
        { status: 404 }
      );

    return NextResponse.json(saved, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.issues.map((er) => ({
        field: er.path.join(','),
        error: er.message,
      }));
      return NextResponse.json(errors, { status: 403 });
    }
  }
}
