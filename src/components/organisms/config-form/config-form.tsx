'use client';
import { BaseButton } from '@/components/atoms/base-btn';
import { ConfigField } from '@/components/molecules/config-field/config-field';
import { useConfigForm } from '@/config/infrastructure/hooks/use-config-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';

type ConfigFormProps = {
  /** callback function when save the form */
  onSave: (config: PartialConfig) => void;
  /** previous data to should when load */
  previousData?: PartialConfig;
  /**Loading state */
  loading?: boolean;
};

/**
 * Configuration form to save a json file
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const ConfigForm: FC<ConfigFormProps> = ({
  onSave,
  previousData,
  loading = false,
}) => {
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
    <AnimatePresence>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-2'
      >
        <ConfigField
          label='Root path'
          textBoxProps={{
            ...register('rootPath'),
            label: 'use a relative path',
            'aria-label': 'Root path',
            disabled: loading,
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
            disabled: loading,
          }}
          error={Boolean(errors.defaultBranch)}
          hitText={errors.defaultBranch?.message}
        />
        <BaseButton disabled={loading} type='submit' className='mt-5'>
          {loading ? 'Saving...' : 'Save'}
        </BaseButton>
      </motion.form>
    </AnimatePresence>
  );
};
