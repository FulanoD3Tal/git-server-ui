import { api } from '@/lib/rest-client';

export async function postRepo(newRepo: NewRepository) {
  const response = await api.post<Repository>('/repo', newRepo);
  return response.data;
}
