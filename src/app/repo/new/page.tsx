import { RepoForm } from '@/components/organisms/repo-form';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New repo',
  description: 'create your new repository',
};

export default function NewRepoPage() {
  return (
    <main className='md:max-w-5xl my-4 mx-auto px-4'>
      <Link href='/' className='opacity-80 dark:text-white hover:underline'>
        Dashboard
      </Link>
      <h1 className='text-2xl font-bold mb-8'>Create a new repo</h1>
      <section className='flex flex-col gap-4'>
        <RepoForm />
      </section>
    </main>
  );
}
