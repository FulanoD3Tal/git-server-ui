import { ConfigPage } from '@/components/pages/config-page/config-page';
import { configurationController } from '@/config/infrastructure/configuration-controller';
import { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Git Server Settings',
  description: 'Modify the settings and configurations of the server',
};

export default async function ConfigSettingsPage() {
  const config = await configurationController.getConfig();
  return (
    <main className='md:max-w-5xl my-4 mx-auto px-4'>
      <Link href='/' className='opacity-80 dark:text-white hover:underline'>
        Dashboard
      </Link>
      <h1 className='text-2xl dark:text-white font-bold my-8'>Settings</h1>
      <h2 className='text-xl dark:text-white border-b mb-8'>Git</h2>
      <ConfigPage initialData={config} />
    </main>
  );
}
