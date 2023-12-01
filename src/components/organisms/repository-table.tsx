import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { RepositoryList } from '../molecules/repository-list';
import { repositoryController } from '@/dashboard/infrastructure/repository-controller';

type RepositoryTableProps = {
  query: RepositoryQueryParams;
};
export default async function RepositoryTable({ query }: RepositoryTableProps) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', query],
    queryFn: async () => await repositoryController.getRepos({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RepositoryList query={query} emptyMessage='No repos founds' />
    </HydrationBoundary>
  );
}
