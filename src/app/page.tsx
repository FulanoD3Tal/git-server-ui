import { RepositoryListSkeleton } from '@/components/molecules/repository-list-skeleton';
import { SearchBar } from '@/components/molecules/searchbar';
import RepositoryTable from '@/components/organisms/repository-table';
import { configurationController } from '@/config/infrastructure/configuration-controller';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function Dashboard({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const config = await configurationController.getConfig();
  if (!config.rootPath) redirect('/config');
  const query = searchParams?.query || '';

  return (
    <main className='max-w-5xl mx-auto my-4'>
      <h1 className='text-2xl font-bold mb-8'>My Git Server</h1>
      <section className='flex flex-col gap-4'>
        <SearchBar textBoxProps={{ label: 'Search', spellCheck: false }} />
        <Suspense key={query} fallback={<RepositoryListSkeleton />}>
          <RepositoryTable query={{ query }} />
        </Suspense>
      </section>
    </main>
  );
}
