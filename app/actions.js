"use server";
import { getSession } from "@auth0/nextjs-auth0";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function updateUser(prevState, formData) {
    const name = formData.get("name");
    // const profile = formData.get("profile");
    console.log(name, "name value");
    // console.log(profile, "profile");


//   revalidatePath("/dashboard");
//   return { message: "Profile updated" };
return{ message: "Test"}

}

export async function createProject(prevState, formData) {
    const session = await getSession();
    console.log(session, "session");
    const name = formData.get("name");
    const description = formData.get("description");
    if (!name || !description) {
        return { message: "Name and description required" };
    }
    // Check if user is in the database if not add them
    
    revalidatePath("/dashboard");
    return { message: "Project created" };
}
