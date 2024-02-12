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
    const name = formData.get("name");
    const description = formData.get("description");
    if (!name) {
        return { message: "Name required" };
    }
    try{
        const project = await prisma.project.create({
            data: {
               title: name,
                description: description,
                user: {
                    connect: {
                        gmailNickname: session.user.nickname,
                    },
                },
            },
        });
        if (!project) throw new Error("Project not created");
        return { message: "Project created", redirectUrl: "/dashboard" };
    }catch(err){
        console.log(err, "err");
        return { message: "There is an error", error: err };
    }
    
    revalidatePath("/dashboard");
    return { message: "Project created" };
}
