"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CreateUser() {
    const { user, error, isLoading } = useUser();
    function handleClick(nickname){
        console.log(nickname)
        fetch(`http://localhost:3000/api/users/${nickname}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user })
        })
        .then(response => response.json())
        .then(data => {
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl;
            } else{
                console.log(data.message)  
            }
        })
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h2>Hello!, Thanks for checking out AgileQuest!</h2>
            <p>It looks like you're new here. Let's get you started with a few details.</p>
            <h3>How does this work?</h3>
            <p>Explain how it works here.</p>
            <button onClick={()=> {
                handleClick(user.nickname)
            }}>Sounds Great!</button>
        </>
    );
}


