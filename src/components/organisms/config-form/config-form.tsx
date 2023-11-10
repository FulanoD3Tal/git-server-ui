import { ConfigField } from '@/components/molecules/config-field/config-field';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type ConfigFormProps = {
  /** callback function when save the form */
  onSave: (config: PartialConfig) => void;
  /** previous data to should when load */
  previousData: Config;
};

/**
 * Configuration form to save a json file
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const ConfigForm: FC<ConfigFormProps> = ({ onSave, previousData }) => {
  const { handleSubmit, register } = useForm<Config>({
    reValidateMode: 'onChange',
    defaultValues: previousData,
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
      />
      <ConfigField
        label='Default branch'
        textBoxProps={{
          ...register('defaultBranch'),
          label: 'branch to use when create new repos',
          'aria-label': 'Default branch',
        }}
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
