import StudentInfo from "./StudentInfo";
import Link from "next/link";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono">

        <div className="fixed bottom-0 mb-5 left-0 flex h-48 w-full text-4xl bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1>CPRG 306: Web Development 2 - Assignments</h1>
        </div>

        <div className="mb-5">
          <StudentInfo />
        </div>

        <div className="text-sm text-red-600 font-bold flex flex-wrap">
          <div className="w-full">
            <Link href="./week2">Week 2</Link>
          </div>
          <div className="w-full">
            <Link href="./week3">Week 3</Link>
          </div>
        </div>

      </div>

    </main>
  )
}
