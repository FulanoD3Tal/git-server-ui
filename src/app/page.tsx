import { RepositoryList } from '@/components/molecules/repository-list';
import { SearchBar } from '@/components/molecules/searchbar';
import { configurationController } from '@/config/infrastructure/configuration-controller';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const config = await configurationController.getConfig();
  if (!config.rootPath) redirect('/config');
  return (
    <main className='max-w-5xl mx-auto my-4'>
      <h1 className='text-2xl font-bold mb-8'>My Git Server</h1>
      <section className='flex flex-col gap-4'>
        <SearchBar textBoxProps={{ label: 'search/create' }} />
        <RepositoryList items={[]} emptyMessage='There is no repository' />
      </section>
    </main>
  );
}
