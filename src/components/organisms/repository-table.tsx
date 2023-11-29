import { repositoryController } from '@/dashboard/infrastructure/repository-controller';
import { RepositoryList } from '../molecules/repository-list';

type RepositoryTableProps = {
  query: string;
};
export default async function RepositoryTable({ query }: RepositoryTableProps) {
  const repos = await repositoryController.getRepos({ query });
  return <RepositoryList items={repos} emptyMessage='No repos founds' />;
}
