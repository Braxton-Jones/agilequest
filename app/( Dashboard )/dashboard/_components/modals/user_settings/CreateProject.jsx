'use client';
import { useFormState, useFormStatus } from "react-dom";
import { createProject } from "@/app/actions";
const initialState ={
    message: ""

}
function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <button type="submit" aria-disabled={pending}>
        Create Project
      </button>
    );
  }
export default function CreateProject(){
  const [state, formAction] = useFormState(createProject, initialState)
   
    return (
        <>
        <h3>Create New Project</h3>
        <form action={formAction}>
            <label>Project Name</label>
            <input type="text" name="name" placeholder="Project Name" />
            <label>Project Description</label>
            <textarea name="description" placeholder="Project Description" />
            <SubmitButton/>
            {state?.message}
        </form>
        </>
    )
}