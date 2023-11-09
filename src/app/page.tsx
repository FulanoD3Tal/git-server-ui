import { RepositoryList } from '@/components/molecules/repository-list';
import { SearchBar } from '@/components/molecules/searchbar';
import { getAllRepos } from '@/repository/git-repository';

export default async function Dashboard() {
  // TODO: validate if use server components of just tanskquery
  const repos = await getAllRepos('./dirTest');
  return (
    <main className='max-w-5xl mx-auto my-4'>
      <h1 className='text-2xl font-bold mb-8'>My Git Server</h1>
      <section className='flex flex-col gap-4'>
        <SearchBar textBoxProps={{ label: 'search/create' }} />
        <RepositoryList items={repos} emptyMessage='There is no repository' />
      </section>
    </main>
  );
}
