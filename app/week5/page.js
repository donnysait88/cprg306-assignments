import React from 'react';
import Link from 'next/link';
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen items-center p-10 font-mono">
        <div className="text-xl font-bold flex">
            <h1 className="mr-10">My Shopping List</h1>
            <Link href="/">&lt;Back</Link>
        </div>
        <ItemList/>
    </main>
  )
}

export default Page;