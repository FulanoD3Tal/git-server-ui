import { BaseButton } from '@/components/atoms/base-btn';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

type ThemeIconButtonProps = {
  theme: Theme;
  onSwitch: () => void;
};

const toggleTheme = (theme: Theme): Theme =>
  theme === 'light' ? 'dark' : 'light';

/**
 * Icon swith button to modify the local theme
 * @author [Ing. Roberto Alonso De la Garza Mendoza](https://github.com/FulanoD3Tal)
 */
export const ThemeIconButton: FC<ThemeIconButtonProps> = ({
  theme,
  onSwitch,
}) => {
  const label = `switch to ${toggleTheme(theme)} mode`;

  return (
    <BaseButton
      className='px-2'
      btnType='secondary'
      aria-label={label}
      title={label}
      onClick={() => onSwitch()}
    >
      {theme === 'light' && (
        <motion.svg
          height='24'
          viewBox='0 -960 960 960'
          width='24'
          className='fill-current'
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            type: 'spring',
            duration: 0.2,
          }}
        >
          <path d='M482.308-160q-133.334 0-226.667-93.333Q162.307-346.667 162.307-480q0-121.539 79.231-210.77Q320.769-780 437.693-796.154q3.23 0 6.346.231 3.115.23 6.115.692-20.231 28.231-32.038 62.808-11.808 34.577-11.808 72.423 0 106.667 74.667 181.333Q555.641-404 662.308-404q38.077 0 72.538-11.808 34.462-11.808 61.923-32.039.462 3 .693 6.116.231 3.115.231 6.346-15.385 116.923-104.616 196.154T482.308-160Z' />
        </motion.svg>
      )}
      {theme === 'dark' && (
        <motion.svg
          height='24'
          viewBox='0 -960 960 960'
          width='24'
          className='fill-current'
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            type: 'spring',
            duration: 0.2,
          }}
        >
          <path d='M480-320q-66.846 0-113.423-46.577T320-480q0-66.846 46.577-113.423T480-640q66.846 0 113.423 46.577T640-480q0 66.846-46.577 113.423T480-320ZM200-460H60v-40h140v40Zm700 0H760v-40h140v40ZM460-760v-140h40v140h-40Zm0 700v-140h40v140h-40ZM269.846-663.846l-86.385-83.923 27.77-29.77 84.461 85.385-25.846 28.308Zm478.923 481.385-84.692-85.616 26.077-28.077 86.385 83.923-27.77 29.77Zm-84.923-507.693 83.923-86.385 29.77 27.77-85.385 84.461-28.308-25.846ZM182.461-211.231l85.616-84.692 26.538 26.077-83.153 87.154-29.001-28.539Z' />
        </motion.svg>
      )}
    </BaseButton>
  );
};
