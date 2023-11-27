type Repository = {
  uuid: string;
  name: string;
  lastUpdated: number;
  createdAt: number;
  path: string;
};

type NewRepository = Pick<Repository, 'name' | 'path'>;
