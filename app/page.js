import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center text-4xl bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
        </div>

        <StudentInfo />

        <div className="text-sm">
          <Link href="./week2">Week 2</Link>
        </div>

      </div>
    </main>
  )
}
