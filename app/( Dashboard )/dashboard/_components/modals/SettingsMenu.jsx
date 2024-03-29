'use client';
import { useUser } from "@auth0/nextjs-auth0/client";
import { useFormState, useFormStatus } from "react-dom";
import Image from 'next/image';
import { updateUser } from "@/app/actions";
import { useState, useEffect } from "react";

const initialState = {
  message: ""
}
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Save
    </button>
  );
}

export default function SettingsMenu() {  
  const [dbUser, setDBUser] = useState(null);
  const { user, error, isLoading } = useUser();
  const [state, formAction] = useFormState(updateUser, initialState);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user/?nickname=${user.nickname}`);
            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            const data = await response.json();
            console.log(data);
            setDBUser(data);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      }
    };

    fetchUser();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { name, picture } = user || {};

  return (
    <>
      <h2>Settings</h2>
      <form action={formAction}>
        <div>
          <label htmlFor="name">Profile Image</label>
          <Image src={picture} alt="Profile Image" width={70} height={70} style={{ borderRadius: '15px' }} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder={name} />
        </div>
        <SubmitButton />
        {state?.message}
      </form>
    </>
  );
}