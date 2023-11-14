import { api } from '@/lib/rest-client';

export async function getConfig() {
  const response = await api.get<Config>('/config');
  return response.data;
}

export async function postConfig(config: PartialConfig) {
  const response = await api.post<Config>('/config', config);
  return response.data;
}
