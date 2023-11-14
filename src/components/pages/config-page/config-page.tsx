'use client';
import { ConfigForm } from '@/components/organisms/config-form/config-form';
import { configurationController } from '@/config/infrastructure/configuration-controller';
import { useRestConfig } from '@/config/infrastructure/http/config-rest-repository';
import { FC } from 'react';

type ConfigPageProps = {
  initialData: PartialConfig;
};

export const ConfigPage: FC<ConfigPageProps> = ({ initialData }) => {
  const {
    query: { data },
    mutation: { mutate },
  } = useRestConfig({ initialData });

  return <ConfigForm onSave={mutate} previousData={data} />;
};
