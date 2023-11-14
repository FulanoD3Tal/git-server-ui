'use client';
import { ConfigForm } from '@/components/organisms/config-form/config-form';
import { useRestConfig } from '@/config/infrastructure/http/config-rest-repository';
import { FC } from 'react';

type ConfigPageProps = {
  initialData: PartialConfig;
};

export const ConfigPage: FC<ConfigPageProps> = ({ initialData }) => {
  const {
    mutation: { mutate },
  } = useRestConfig();

  return <ConfigForm onSave={mutate} previousData={initialData} />;
};
