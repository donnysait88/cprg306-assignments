import Link from "next/link";

const StudentInfo = () => {
    return (
    <div className="text-sm pr-10">
        <h1>My Student Info</h1>
        <p>Name: Paradon Meeanan</p>
        <p>Course section: CPRG 306 E</p>
        <nav>
            <Link href="https://github.com/donnysait88/cprg306-assignments">https://github.com/donnysait88/cprg306-assignments</Link>
        </nav>
    </div>
    )
  };


export default StudentInfo;