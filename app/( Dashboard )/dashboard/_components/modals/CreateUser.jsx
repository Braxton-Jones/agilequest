"use client";
import prisma from "@/lib/prisma";
import { useUser } from "@auth0/nextjs-auth0/client";

async function addUserToDatabase(nickname) {
    try {
        await prisma.user.create({
            data: {
                gmailNickname: nickname,
            },
        });
        console.log("User added to database");
        return { message: "User added to database" };
    } catch (error) {
        return error;
    }
}
export default function CreateUser() {
    const { user, error, isLoading } = useUser();
    console.log(user, "user")
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    return(
        <>
        <h2>Hello!, Thanks for checking out Agile Stream!</h2>
        <p>It looks like you're new here. Let's get you started with a few details.</p>
        <h3>How does this work?</h3>
        <p>
            {/*Explain how it works*/}
        </p>
        <button onClick={() => addUserToDatabase(user.nickname)}>Sounds Great!</button>
        </>
    )
}


{/*
    Trying to figure out how to add a user to the database when they first sign in.
    The issue is that i dont know how to do async on a client side component.
 */}
