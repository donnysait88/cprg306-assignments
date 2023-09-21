import ItemList from "./item-list";
import Link from "next/link";

const Page = () => {
    return(
        <main className="flex flex-col min-h-screen p-10">
            <div className="text-m flex justify-between">
                <div className="text-xl font-bold flex">
                    <h1>My Shopping List</h1>
                </div>
                <Link href="/">&lt;Back</Link>
            </div>

            <ItemList/>
            
        </main>
    )
} 
export default Page;