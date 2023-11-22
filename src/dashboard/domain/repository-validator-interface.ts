export interface IRepositoryValidator {
  validate(repo: NewRepository): NewRepository;
}
