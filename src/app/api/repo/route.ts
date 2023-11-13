import { getAllRepos } from '@/core/repository/git-repository';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const repos = await getAllRepos('./dirTest');
    return NextResponse.json(repos);
  } catch (error) {
    console.log('Error trying to get repo', error);

    return NextResponse.json({ message: 'There was and error' }, { status: 500 });
  }
}
