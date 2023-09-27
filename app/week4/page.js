import React from 'react';
import NewItem from './new-item';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen items-center p-10 font-mono">
      <NewItem />
      <Link href="/">&lt;Back</Link>
    </div>
  )
}

export default Page;
