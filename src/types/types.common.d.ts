type Repository = {
  name: string;
  lastUpdated: string;
};

type Config = {
  rootPath: string;
  defaultBranch: string;
};

type PartialConfig = Partial<PartialConfig>;
