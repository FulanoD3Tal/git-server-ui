type Repository = {
  uuid: string;
  name: string;
  lastUpdated: string;
  createdAt: string;
  path: string;
};

type NewRepository = Pick<Repository, 'name' | 'path'>;
