import { api } from '@/lib/rest-client';

export async function postRepo(newRepo: NewRepository) {
  const response = await api.post<Repository>('/repo', newRepo);
  return response.data;
}

export async function deleteRepo(uuid: Repository['uuid']) {
  const response = await api.delete(`/repo/${uuid}`);
  return response.data;
}

export async function getRepos(query: RepositoryQueryParams) {
  const response = await api.get<Repository[]>('/repo', { params: query });
  return response.data;
}
