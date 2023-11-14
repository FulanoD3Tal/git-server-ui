'use client';
import { ConfigField } from '@/components/molecules/config-field/config-field';
import { useConfigForm } from '@/config/infrastructure/hooks/use-config-form';
import { FC } from 'react';

type ConfigFormProps = {
  /** callback function when save the form */
  onSave: (config: PartialConfig) => void;
  /** previous data to should when load */
  previousData?: PartialConfig;
};

/**
 * Configuration form to save a json file
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const ConfigForm: FC<ConfigFormProps> = ({ onSave, previousData }) => {
  const {
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
  } = useConfigForm({
    previousData,
  });

  const onSubmit = (data: PartialConfig) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
      <ConfigField
        label='Root path'
        textBoxProps={{
          ...register('rootPath'),
          label: 'use a relative path',
          'aria-label': 'Root path',
        }}
        error={Boolean(errors.rootPath)}
        hitText={errors.rootPath?.message}
      />
      <ConfigField
        label='Default branch'
        textBoxProps={{
          ...register('defaultBranch'),
          label: 'branch to use when create new repos',
          'aria-label': 'Default branch',
        }}
        error={Boolean(errors.defaultBranch)}
        hitText={errors.defaultBranch?.message}
      />
      {/* TODO: move it to the atoms folders */}
      <button
        className='bg-black py-1 px-3 rounded-md text-white font-bold'
        type='submit'
      >
        Save
      </button>
    </form>
  );
};
