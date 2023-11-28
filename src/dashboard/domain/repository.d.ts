type Repository = {
  uuid: string;
  name: string;
  lastUpdated: Date | null;
  createdAt: Date | null;
  path: string;
};

type RepositoryQueryParams = {
  query: string;
};

type NewRepository = Pick<Repository, 'name' | 'path'>;
