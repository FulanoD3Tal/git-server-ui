type Repository = {
  name: string;
  lastUpdated: string;
};

type NewRepository = Omit<Repository, 'lastUpdated'>;
