import Link from "next/link";

export default function CreateInitProjectFlow() {
  return (
    <>
        <h2>New Here?</h2>
        <p>It looks like you haven't made a project here before?</p>
        <p>Want to create your first one?</p>
        <div>
        <Link href="/dashboard/?createProject=true">Create New Project</Link>
        <Link href="/dashboard">Go to Dashboard</Link>
       </div>
    </>
  )
}
